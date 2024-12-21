import * as HttpStatusCodes from 'stoker/http-status-codes';
// import * as HttpStatusPhrases from "stoker/http-status-phrases";
import type { AppRouteHandler } from '../../lib/types';
import { ZOD_ERROR_CODES, ZOD_ERROR_MESSAGES } from '../../lib/constants';
import type { AuthRoute } from './auth.routes';

export const auth: AppRouteHandler<AuthRoute> = async (c) => {
	return c.json(
		{
			message: 'This is will be the auth route',
		},
		HttpStatusCodes.OK
	);
};
