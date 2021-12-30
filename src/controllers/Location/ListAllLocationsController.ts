import { Request, Response } from "express";
import { ListAllLocationsService } from "../../services/Location/ListAllLocationsService";

const listAllLocationsService = new ListAllLocationsService();

class ListAllLocationsController{
    async handle(req:Request, res:Response):Promise<Response>{
        try{
            const locations = await listAllLocationsService.execute({
                user_id: req.user.id
            })

            return res.status(201).json(locations)
        }catch(err: any){
            return res.status(401).json({ error: err.message })
        }
    }
}

export { ListAllLocationsController }