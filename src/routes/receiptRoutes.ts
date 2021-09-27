import { Router } from 'express';
import { CreateReceiptController } from '../controllers/Receipt/CreateReceiptController';

const routesReceipts = Router();

const createReceiptController = new CreateReceiptController();

routesReceipts.post('/', createReceiptController.handle);

export { routesReceipts }