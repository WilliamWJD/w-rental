import { Request, Response } from "express";
import { GetHouseService } from "../../services/House/GetHouseService";

const getHouseService = new GetHouseService();

class GetHouseController{
    async handle(req:Request, res:Response):Promise<Response>{
        try{    
            const { id } = req.params;

            const house = await getHouseService.execute({
                id,
                user_id:req.user.id
            })

            return res.status(201).json(house)
        }catch(err: any){
            return res.status(401).json({ error: err.any })
        }
    }
}

export { GetHouseController }