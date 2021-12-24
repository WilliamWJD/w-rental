import { Router } from 'express';
import { CreateHouseController } from '../controllers/House/CreateHouseController';
import { DeleteHouseController } from '../controllers/House/DeleteHouseController';
import { GetHouseController } from '../controllers/House/GetHouseController';
import { ListHousesController } from '../controllers/House/ListHousesController';
import { UpdatedHouseController } from '../controllers/House/UpdatedHouseController';
import { EnsureAuthenticated } from '../middlewares/EnsureAuthenticated';

const createHouseController = new CreateHouseController();
const listHousesController = new ListHousesController();
const deleteHouseController = new DeleteHouseController();
const getHouseController = new GetHouseController();
const updatedHouseController = new UpdatedHouseController();

const routeHouses = Router();

routeHouses.post('/', EnsureAuthenticated, createHouseController.handle);
routeHouses.put('/:id', EnsureAuthenticated, updatedHouseController.handle);
routeHouses.delete('/:id', EnsureAuthenticated, deleteHouseController.handle);

routeHouses.get('/:id', EnsureAuthenticated, getHouseController.handle);
routeHouses.get('/', EnsureAuthenticated, listHousesController.handle);

export { routeHouses }