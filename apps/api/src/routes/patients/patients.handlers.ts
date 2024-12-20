import * as HttpStatusCodes from 'stoker/http-status-codes';
// import * as HttpStatusPhrases from "stoker/http-status-phrases";
import type { AppRouteHandler } from '../../lib/types';
import { ZOD_ERROR_CODES, ZOD_ERROR_MESSAGES } from '../../lib/constants';
import type { HelloRoute } from './patients.routes';

export const hello: AppRouteHandler<HelloRoute> = async (c) => {
	return c.json(
		{
			message: 'Hello, World!',
		},
		HttpStatusCodes.OK
	);
};
