import { Request, Response } from "express";
import { CreateTenantService } from '../../services/Tenants/CreateTenantService';

const createTenantService = new CreateTenantService();

class CreateTenantController{
    async handle(req:Request, res:Response):Promise<Response>{
        const { name, birth, rg, cpf, marital_status, profession, email, fone1, fone2 } = req.body;

        const tenant = await createTenantService.execute({name, birth, rg, cpf, marital_status, profession, email, fone1, fone2});

        return res.status(201).json(tenant);
    }
}

export { CreateTenantController }