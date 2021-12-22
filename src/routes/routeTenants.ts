import { Router } from 'express';
import { CreateTenantController } from '../controllers/Tenant/CreateTenantController';
import { DeleteTenantController } from '../controllers/Tenant/DeleteTenantController';
import { ListAllTenantsController } from '../controllers/Tenant/ListAllTenantsController';
import { EnsureAuthenticated } from '../middlewares/EnsureAuthenticated';

const routeTenants = Router();

const createTenantController = new CreateTenantController();
const listAllTenantsController = new ListAllTenantsController();
const deleteTenantController = new DeleteTenantController();

routeTenants.post('/', EnsureAuthenticated, createTenantController.handle);
routeTenants.get('/', EnsureAuthenticated, listAllTenantsController.handle);
routeTenants.delete('/:id', EnsureAuthenticated, deleteTenantController.handle);

export { routeTenants }