import { Router } from 'express';
import { routeTenants } from './routeTenants';

const routes = Router();

routes.use('/tenants', routeTenants);

export { routes }