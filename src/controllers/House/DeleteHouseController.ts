import { Request, Response } from "express";
import { DeleteHouseService } from "../../services/House/DeleteHouseService";

const deleteHouseService = new DeleteHouseService();

class DeleteHouseController{
    async handle(req:Request, res:Response):Promise<Response>{
        const { id } = req.params;
        
        try{
            await deleteHouseService.execute({
                id,
                user_id:req.user.id
            })

            return res.status(201).send();
        }catch(err: any){
            return res.status(401).json({ error: err.any })
        }
    }
}

export { DeleteHouseController }