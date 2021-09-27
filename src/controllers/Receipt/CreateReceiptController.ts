import { Request, Response } from "express";
import { CreateReceiptService } from "../../services/Receipt/CreateReceiptService";

const createReceiptService = new CreateReceiptService();

class CreateReceiptController{
    async handle(req:Request, res:Response):Promise<Response>{
        try{
            const { date_start, date_end, energy_value, water_value, location_id } = req.body;
            const receipt = await createReceiptService.execute({
                date_start, 
                date_end,
                energy_value,
                water_value,
                location_id
            })
            return res.status(201).json(receipt);
        }catch(err:any){
            return res.status(401).json({ error: err.message })
        }
    }
}

export { CreateReceiptController }