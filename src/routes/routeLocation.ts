import { Router } from 'express';

import { EnsureAuthenticated } from '../middlewares/EnsureAuthenticated';

import { CreateLocationController } from '../controllers/Location/CreateLocationController';
import { ListAllLocationsController } from '../controllers/Location/ListAllLocationsController';

const createLocationController = new CreateLocationController();
const listAllLocationsController = new ListAllLocationsController();

const routesLocation = Router();

routesLocation.post('/',EnsureAuthenticated, createLocationController.handle);
routesLocation.get('/',EnsureAuthenticated, listAllLocationsController.handle)

export { routesLocation }