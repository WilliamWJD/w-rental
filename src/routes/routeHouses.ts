import { Router } from 'express';
import { CreateHouseController } from '../controllers/House/CreateHouseController';

const createHouseController = new CreateHouseController();

const routeHouses = Router();

routeHouses.post('/', createHouseController.handle);

export { routeHouses }