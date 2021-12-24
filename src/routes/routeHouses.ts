import { Router } from 'express';
import { CreateHouseController } from '../controllers/House/CreateHouseController';
import { DeleteHouseController } from '../controllers/House/DeleteHouseController';
import { ListHousesController } from '../controllers/House/ListHousesController';
import { EnsureAuthenticated } from '../middlewares/EnsureAuthenticated';

const createHouseController = new CreateHouseController();
const listHousesController = new ListHousesController();
const deleteHouseController = new DeleteHouseController();

const routeHouses = Router();

routeHouses.post('/', EnsureAuthenticated, createHouseController.handle);
routeHouses.get('/', EnsureAuthenticated, listHousesController.handle);
routeHouses.delete('/:id', EnsureAuthenticated, deleteHouseController.handle);

export { routeHouses }