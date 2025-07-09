import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod";
import { drizzleDB } from "../../database/connection.ts";
import { schema } from "../../database/schema/index.ts";
import { z } from "zod/v4";
import { desc, eq } from "drizzle-orm";

export const getRoomsQuestionsRoute: FastifyPluginCallbackZod = (app) => {
    app.get(
        '/rooms/:roomId/questions', 
        {
            schema: {
                params: z.object({
                    roomId: z.string(),
                }),
            },
        },
        async (request) => {
            const { roomId } = request.params;

            const results = await drizzleDB.select({
                id: schema.questions.id,
                questions: schema.questions.questions,
                answer: schema.questions.answer,
                createdAt: schema.questions.createdAt,
            })
                .from(schema.questions)
                .where(
                    eq(schema.questions.roomId, roomId)
                )
                .orderBy(desc(schema.questions.createdAt));

            return results;
        }
    );
}