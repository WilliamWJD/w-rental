import { Request, Response } from "express";
import { CreateAuthenticatedService } from "../../services/User/CreateAuthenticatedService";

class CreateAuthenticatedController {
    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const { username, password } = req.body;

            const createAuthenticatedService = new CreateAuthenticatedService();

            const userToken = await createAuthenticatedService.execute({
                username,
                password
            })

            return res.status(201).json(userToken);
        } catch (err: any) {
            return res.status(401).json({ error: err.message })
        }
    }
}

export { CreateAuthenticatedController }