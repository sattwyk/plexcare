import { createRoute, z } from '@hono/zod-openapi';
import * as HttpStatusCodes from 'stoker/http-status-codes';
import { jsonContent, jsonContentRequired } from 'stoker/openapi/helpers';
// import { createErrorSchema, IdParamsSchema } from 'stoker/openapi/schemas';
// import { notFoundSchema } from '../../lib/constants';

export const auth = createRoute({
	path: '/auth/*',
	method: 'post',
	request: {},
	responses: {
		[HttpStatusCodes.OK]: jsonContent(z.object({ message: z.string() }), 'auth route'),
	},
});

export type AuthRoute = typeof auth;
