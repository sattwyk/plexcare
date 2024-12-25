import * as HttpStatusCodes from 'stoker/http-status-codes';
// import * as HttpStatusPhrases from "stoker/http-status-phrases";
import type { AppRouteHandler } from '../../lib/types';
import { ZOD_ERROR_CODES, ZOD_ERROR_MESSAGES } from '../../lib/constants';
import type { HelloRoute } from './patients.routes';
import { db } from 'db';
import { usersTable } from 'db/src/schema';

export const hello: AppRouteHandler<HelloRoute> = async (c) => {
	const data = await db.select().from(usersTable)
	return c.json(
		{
			message: 'Hello, World!',
			data
		},
		HttpStatusCodes.OK
	);
};
