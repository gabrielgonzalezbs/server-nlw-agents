import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod";
import { drizzleDB } from "../../database/connection.ts";
import { schema } from "../../database/schema/index.ts";

export const getRoomsRoute: FastifyPluginCallbackZod = (app) => {
    app.get('/rooms', async () => {
        const results = await drizzleDB.select({
            id: schema.rooms.id,
            name: schema.rooms.name
        })
        .from(schema.rooms)
        .orderBy(schema.rooms.createdAt);

        return results;
    })
}