import { createRoute, z } from '@hono/zod-openapi';
import * as HttpStatusCodes from 'stoker/http-status-codes';
import { jsonContent, jsonContentRequired } from 'stoker/openapi/helpers';
// import { createErrorSchema, IdParamsSchema } from 'stoker/openapi/schemas';
// import { notFoundSchema } from '../../lib/constants';

export const hello = createRoute({
	path: '/hello',
	method: 'get',
	request: {},
	responses: {
		[HttpStatusCodes.OK]: jsonContent(z.object({ message: z.string() }), 'hello there'),
	},
});

export type HelloRoute = typeof hello;
