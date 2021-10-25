import { Router } from 'express';
import { CreateTenantController } from '../controllers/Tenant/CreateTenantController';
import { EnsureAuthenticated } from '../middlewares/EnsureAuthenticated';

const routeTenants = Router();

const createTenantController = new CreateTenantController();

routeTenants.post('/', EnsureAuthenticated, createTenantController.handle);

export { routeTenants }