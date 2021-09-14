import { Router } from 'express';
import { CreateTenantController } from '../controllers/Tenant/CreateTenantController';

const routeTenants = Router();

const createTenantController = new CreateTenantController();

routeTenants.post('/', createTenantController.handle);

export { routeTenants }