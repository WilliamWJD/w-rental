import { Request, Response } from "express";
import { ListHousesService } from "../../services/House/ListHousesService";

const listHousesService = new ListHousesService();

class ListHousesController{
    async handle(req:Request, res:Response):Promise<Response>{
        try{
            const houses = await listHousesService.execute({
                user_id:req.user.id
            })

            return res.status(201).json(houses);
        }catch(err:any){
            return res.status(401).json({ error: err.message })
        }
    }
}

export { ListHousesController }