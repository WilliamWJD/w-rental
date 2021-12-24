import { Request, Response } from "express";
import { UpdateHouseService } from "../../services/House/UpdateHouseService";

const updatedHouseService = new UpdateHouseService();

class UpdatedHouseController{
    async handle(req:Request, res:Response):Promise<Response>{
        try{
            const { name, description, value, state, address, district, city, num } = req.body
            const { id } = req.params;

            const house = await updatedHouseService.execute({
                id,
                name,
                description,
                value,
                state,
                address,
                district,
                city,
                num,
                user_id:req.user.id
            })

            return res.status(201).json(house)
        }catch(err: any){
            return res.status(401).json({ error: err.message })
        }
    }
}

export { UpdatedHouseController }