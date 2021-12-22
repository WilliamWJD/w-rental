import { Request, Response } from "express";
import { ShowTenantService } from "../../services/Tenants/ShowTenantService";

const showTenantService = new ShowTenantService();

class ShowTenantController{
    async handle(req:Request, res:Response):Promise<Response>{
        try{
            const { id } = req.params;

            const tenant = await showTenantService.execute({
                id,
                user_id:req.user.id
            })

            return res.status(201).json(tenant);
        }catch(err:any){
            return res.status(401).json({ error: err.message })
        }
    }
}

export { ShowTenantController }