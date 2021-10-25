import { Router } from 'express';
import { CreateAuthenticatedController } from '../controllers/User/CreateAuthenticatedController';
import { CreateUserController } from '../controllers/User/CreateUserController';

const routesUser = Router();

const createUserController = new CreateUserController();
const createAuthenticatedController = new CreateAuthenticatedController();

routesUser.post('/', createUserController.handle);
routesUser.post('/authenticated', createAuthenticatedController.handle)

export { routesUser }