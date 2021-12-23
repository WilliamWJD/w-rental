import { Request, Response } from "express";
import { UpdateTenantService } from "../../services/Tenants/UpdateTenantService";

const updateTenantService = new UpdateTenantService();

class UpdateTenantController {
    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const { name, birth, rg, cpf, marital_status, profession, email, fone1, fone2 } = req.body;
            const { id } = req.params;

            const tenant = await updateTenantService.execute({
                id,
                name,
                birth,
                rg,
                cpf,
                marital_status,
                profession,
                email,
                fone1,
                fone2,
                user_id: req.user.id
            })

            return res.status(201).json(tenant);
        } catch (err: any) {
            return res.status(401).json({ error: err.message })
        }
    }
}

export { UpdateTenantController }