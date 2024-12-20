import { createRouter } from '../../lib/create-app';
import * as handlers from './patients.handlers';
import * as routes from './patients.routes';

const router = createRouter().openapi(routes.hello, handlers.hello);

export default router;
