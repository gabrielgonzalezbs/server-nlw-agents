import { reset, seed } from 'drizzle-seed'
import { clientDB, drizzleDB } from './connection.ts'
import { schema } from './schema/index.ts'

await reset(drizzleDB, schema);

await seed(drizzleDB, schema).refine((faker) => {
    return {
        rooms: {
            count: 20,
            columns: {
                name: faker.companyName(),
                description: faker.loremIpsum(),
            },
            with: {
                questions: 5,
            }
        }
    }
});

await clientDB.end();
