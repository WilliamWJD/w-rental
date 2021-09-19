import { Request, Response } from "express";
import { CreateLocationService } from "../../services/Location/CreateLocationService";

const createLocationService = new CreateLocationService();

class CreateLocationController{
    async handle(req:Request, res:Response):Promise<Response>{
        const { date_start, date_end, house_id, tenant_id } = req.body;

        const location = await createLocationService.execute({
            date_start,
            date_end,
            house_id,
            tenant_id
        })

        return res.status(201).json(location)
    }
}

export { CreateLocationController }