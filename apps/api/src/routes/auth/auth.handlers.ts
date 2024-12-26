import * as HttpStatusCodes from 'stoker/http-status-codes';
import type { AppRouteHandler } from '../../lib/types';
import type { AuthRoute } from './auth.routes';
import * as betterAuth from '../../lib/auth'
import { db } from "db";
import { usersTable } from "db/src/schema";

export const auth: AppRouteHandler<AuthRoute> = async (c) => {
    const auth = betterAuth.auth.handler(c.req.raw)
    try {
        return c.json(
            {
                message: 'Auth route with DB connection',
                auth
                
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
