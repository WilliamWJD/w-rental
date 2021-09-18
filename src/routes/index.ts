import { Router } from 'express';

import { routeHouses } from './routeHouses';
import { routeTenants } from './routeTenants';

const routes = Router();

routes.use('/tenants', routeTenants);
routes.use('/houses', routeHouses)

export { routes }