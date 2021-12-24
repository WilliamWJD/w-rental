import { Router } from 'express';
import { CreateHouseController } from '../controllers/House/CreateHouseController';
import { ListHousesController } from '../controllers/House/ListHousesController';
import { EnsureAuthenticated } from '../middlewares/EnsureAuthenticated';

const createHouseController = new CreateHouseController();
const listHousesController = new ListHousesController();

const routeHouses = Router();

routeHouses.post('/', EnsureAuthenticated, createHouseController.handle);
routeHouses.get('/', EnsureAuthenticated, listHousesController.handle);

export { routeHouses }