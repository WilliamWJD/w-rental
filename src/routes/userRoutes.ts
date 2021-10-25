import { Router } from 'express';
import { CreateUserController } from '../controllers/User/CreateUserController';

const routesUser = Router();

const createUserController = new CreateUserController();

routesUser.post('/', createUserController.handle);

export { routesUser }