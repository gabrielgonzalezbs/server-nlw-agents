import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod";
import { drizzleDB } from "../../database/connection.ts";
import { schema } from "../../database/schema/index.ts";
import { z } from "zod/v4";

export const createQuestionRoute: FastifyPluginCallbackZod = (app) => {
    app.post(
        '/rooms/:roomId/questions', 
        {
            schema: {
                params: z.object({
                    roomId: z.string(),
                }),
                body: z.object({
                    question: z.string().min(1),
                }),
            }
        }, 
        async (request, reply) => {
            const { roomId } = request.params;
            const { question } = request.body;

            const result = await drizzleDB.insert(schema.questions).values({
                roomId,
                questions: question
            })
            .returning();

            const insertedQuest = result[0];

            if (!insertedQuest) {
                throw new Error("Failed to create new room.");
                
            }

            return reply.status(201).send({ questionId: insertedQuest.id })
        })
}