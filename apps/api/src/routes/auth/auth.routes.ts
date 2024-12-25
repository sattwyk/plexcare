import { createRoute, z } from '@hono/zod-openapi';
import * as HttpStatusCodes from 'stoker/http-status-codes';
import { jsonContent } from 'stoker/openapi/helpers';

export const auth = createRoute({
    path: '/auth/*',
    method: 'post',
    tags: ['Auth'],
    request: {},
    responses: {
        [HttpStatusCodes.OK]: jsonContent(
            z.object({}), 
            'auth route'
        ),
        [HttpStatusCodes.INTERNAL_SERVER_ERROR]: jsonContent(
            z.object({}),
            'If Error occurs'
        )
    },
});

export type AuthRoute = typeof auth;
