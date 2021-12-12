import { Request, Response } from 'express';
import { ListAllTenantsService } from '../../services/Tenants/ListAllTenantsService';

const listAllTenantsService = new ListAllTenantsService();

class ListAllTenantsController{
    async handle(req:Request, res:Response):Promise<Response>{
        const tenants = await listAllTenantsService.execute({
            user_id:req.user.id
        })

        return res.status(201).json(tenants);
    }
}

export { ListAllTenantsController }