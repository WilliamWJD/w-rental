import { Router } from 'express';

import { CreateLocationController } from '../controllers/Location/CreateLocationController';

const createLocationController = new CreateLocationController();

const routesLocation = Router();

routesLocation.post('/', createLocationController.handle);

export { routesLocation }