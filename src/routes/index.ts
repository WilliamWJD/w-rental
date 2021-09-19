import { Router } from 'express';

import { routeHouses } from './routeHouses';
import { routesLocation } from './routeLocation';
import { routeTenants } from './routeTenants';

const routes = Router();

routes.use('/tenants', routeTenants);
routes.use('/houses', routeHouses)
routes.use('/locations', routesLocation)

export { routes }