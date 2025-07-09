import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod";
import { drizzleDB } from "../../database/connection.ts";
import { schema } from "../../database/schema/index.ts";
import { z } from "zod/v4";

export const createRoomsRoute: FastifyPluginCallbackZod = (app) => {
    app.post('/rooms', 
        {
            schema: {
                body: z.object({
                    name: z.string().min(1),
                    description: z.string().optional(),
                }),
            }
        }, 
        async (request, reply) => {
            const { name, description } = request.body;

            const result = await drizzleDB.insert(schema.rooms).values({
                name,
                description,
            })
            .returning();

            const insertedRoom = result[0];

            if (!insertedRoom) {
                throw new Error("Failed to create new room.");
                
            }

            return reply.status(201).send({ roomId: insertedRoom.id })
        })
}