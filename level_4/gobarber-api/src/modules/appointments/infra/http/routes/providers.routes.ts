import { Router } from 'express';

import ProvidersController from '../controllers/ProvidersController';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const providersRoutes = Router();
const providersController = new ProvidersController();

providersRoutes.use(ensureAuthenticated);

providersRoutes.get('/', providersController.index);

export default providersRoutes;
