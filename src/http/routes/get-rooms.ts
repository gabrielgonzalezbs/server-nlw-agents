import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod";
import { drizzleDB } from "../../database/connection.ts";
import { schema } from "../../database/schema/index.ts";
import { count, eq } from "drizzle-orm";

export const getRoomsRoute: FastifyPluginCallbackZod = (app) => {
    app.get('/rooms', async () => {
        const results = await drizzleDB.select({
            id: schema.rooms.id,
            name: schema.rooms.name,
            createdAt: schema.rooms.createdAt,
            questionsCount: count(schema.questions.id)
        })
        .from(schema.rooms)
        .leftJoin(schema.questions, eq(schema.questions.roomId, schema.rooms.id))
        .groupBy(schema.rooms.id, schema.rooms.name)
        .orderBy(schema.rooms.createdAt);

        return results;
    })
}