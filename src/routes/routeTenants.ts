import { Router } from 'express';
import { CreateTenantController } from '../controllers/Tenant/CreateTenantController';
import { DeleteTenantController } from '../controllers/Tenant/DeleteTenantController';
import { ListAllTenantsController } from '../controllers/Tenant/ListAllTenantsController';
import { ShowTenantController } from '../controllers/Tenant/ShowTenantController';
import { EnsureAuthenticated } from '../middlewares/EnsureAuthenticated';

const routeTenants = Router();

const createTenantController = new CreateTenantController();
const listAllTenantsController = new ListAllTenantsController();
const deleteTenantController = new DeleteTenantController();
const showTenantController = new ShowTenantController();

routeTenants.post('/', EnsureAuthenticated, createTenantController.handle);
routeTenants.get('/', EnsureAuthenticated, listAllTenantsController.handle);
routeTenants.get('/:id', EnsureAuthenticated, showTenantController.handle);
routeTenants.delete('/:id', EnsureAuthenticated, deleteTenantController.handle);

export { routeTenants }