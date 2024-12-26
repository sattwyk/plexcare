import { createRouter } from '../../lib/create-app';
import * as handlers from './auth.handlers';
import * as routes from './auth.routes';

const router = createRouter()
  .openapi(routes.authGet, handlers.auth)
  .openapi(routes.authPost, handlers.auth);
  
export default router;
