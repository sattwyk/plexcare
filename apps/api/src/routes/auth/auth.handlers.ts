import * as HttpStatusCodes from 'stoker/http-status-codes';
import type { AppRouteHandler } from '../../lib/types';
import type { AuthRoute } from './auth.routes';
import { db } from "db";
import { usersTable } from "db/src/schema";

export const auth: AppRouteHandler<AuthRoute> = async (c) => {
    try {
        // const newUser = await db.select().from(usersTable).all();
        return c.json(
            {
                message: 'Auth route with DB connection',
                // newUser
            },
            HttpStatusCodes.OK
        );
    } catch (error) {
        return c.json(
            {
                message: 'Database error occurred'
            },
            HttpStatusCodes.INTERNAL_SERVER_ERROR
        );
    }
};
