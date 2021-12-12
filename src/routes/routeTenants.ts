import { Router } from 'express';
import { CreateTenantController } from '../controllers/Tenant/CreateTenantController';
import { ListAllTenantsController } from '../controllers/Tenant/ListAllTenantsController';
import { EnsureAuthenticated } from '../middlewares/EnsureAuthenticated';

const routeTenants = Router();

const createTenantController = new CreateTenantController();
const listAllTenantsController = new ListAllTenantsController();

routeTenants.post('/', EnsureAuthenticated, createTenantController.handle);
routeTenants.get('/', EnsureAuthenticated, listAllTenantsController.handle);

export { routeTenants }