import { env } from "../env.ts";
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { schema } from './schema/index.ts';

export const clientDB = postgres(env.DATABASE_URL)

export const drizzleDB = drizzle(clientDB, {
    schema,
    casing: 'snake_case',
})