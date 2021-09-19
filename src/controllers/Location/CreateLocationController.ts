import { Request, Response } from "express";
import { CreateLocationService } from "../../services/Location/CreateLocationService";

const createLocationService = new CreateLocationService();

class CreateLocationController{
    async handle(req:Request, res:Response):Promise<Response>{
        try{
            const { date_start, date_end, house_id, tenant_id, contract_time } = req.body;

            const location = await createLocationService.execute({
                date_start,
                date_end,
                house_id,
                tenant_id,
                contract_time
            })

            return res.status(201).json(location)
        }catch(err: any){
            return res.status(401).json({ error: err.message });
        }
    }
}

export { CreateLocationController }