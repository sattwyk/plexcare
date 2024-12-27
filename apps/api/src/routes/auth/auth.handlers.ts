import * as HttpStatusCodes from 'stoker/http-status-codes';
import type { AppRouteHandler } from '../../lib/types';
import type { AuthRoute } from './auth.routes';
import * as betterAuth from '../../lib/auth'
import { db } from "db";
import { usersTable } from "db/src/schema";

export const auth: AppRouteHandler<AuthRoute> = async (c) => {
    try {
        const req:any = await c.req.raw.json().catch(() => null);
        
        if (!req) {
            throw new Error('No request body');
        }
        const authResponse = await betterAuth.auth.handler(c.req.raw);

        return c.json(
            {
                message: 'Auth route with DB connection',
                auth
                
            },
            HttpStatusCodes.OK
        );
    } catch (error: any) {      
        return c.json(
            {
                message: error?.message || 'Auth failed',
            },
            HttpStatusCodes.BAD_REQUEST
        );
    }
};
