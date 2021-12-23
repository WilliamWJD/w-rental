import { Router } from 'express';
import { CreateTenantController } from '../controllers/Tenant/CreateTenantController';
import { DeleteTenantController } from '../controllers/Tenant/DeleteTenantController';
import { ListAllTenantsController } from '../controllers/Tenant/ListAllTenantsController';
import { ShowTenantController } from '../controllers/Tenant/ShowTenantController';
import { UpdateTenantController } from '../controllers/Tenant/UpdateTenantController';
import { EnsureAuthenticated } from '../middlewares/EnsureAuthenticated';

const routeTenants = Router();

const createTenantController = new CreateTenantController();
const listAllTenantsController = new ListAllTenantsController();
const deleteTenantController = new DeleteTenantController();
const showTenantController = new ShowTenantController();
const updateTenantController = new UpdateTenantController();

routeTenants.get('/', EnsureAuthenticated, listAllTenantsController.handle);
routeTenants.get('/:id', EnsureAuthenticated, showTenantController.handle);

routeTenants.post('/', EnsureAuthenticated, createTenantController.handle);
routeTenants.put('/:id', EnsureAuthenticated, updateTenantController.handle);
routeTenants.delete('/:id', EnsureAuthenticated, deleteTenantController.handle);

export { routeTenants }