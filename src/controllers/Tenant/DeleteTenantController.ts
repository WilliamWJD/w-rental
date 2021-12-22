import { Request, Response } from "express";
import { DeleteTenantService } from "../../services/Tenants/DeleteTenantService";

const deleteTenantService = new DeleteTenantService();

class DeleteTenantController {
    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;

            await deleteTenantService.execute({
                id,
                user_id: req.user.id
            })

            return res.status(201).send()
        } catch(err:any) {
            return res.status(400).json({ error: err.message })
        }
    }
}

export { DeleteTenantController }