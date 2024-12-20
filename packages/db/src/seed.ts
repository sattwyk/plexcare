import { db } from ".";
import { usersTable } from "./schema";
import { faker } from '@faker-js/faker';

async function main() {
    console.log('Seed data');
    const MAX_USERS = 50;

    for (let i = 0; i <= MAX_USERS; i++) {

        await db.insert(usersTable).values({
            name: faker.name.firstName(),
            age: Math.random() * 100,
            email: faker.internet.email(),
        });
    }

    console.log('Seed data done ❤️');
}

main()