import { Router } from 'express';
import { CreateHouseController } from '../controllers/House/CreateHouseController';
import { EnsureAuthenticated } from '../middlewares/EnsureAuthenticated';

const createHouseController = new CreateHouseController();

const routeHouses = Router();

routeHouses.post('/', EnsureAuthenticated, createHouseController.handle);

export { routeHouses }