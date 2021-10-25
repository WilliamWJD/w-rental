import { Request, Response } from "express";
import { CreateUserService } from "../../services/User/CreateUserService";

class CreateUserController {
    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const { name, username, email, password } = req.body;

            const createUserService = new CreateUserService();
            const user = await createUserService.execute({
                name,
                username,
                email,
                password
            })

            return res.status(201).json(user);
        } catch (err: any) {
            return res.status(401).json({ error: err.message })
        }
    }
}

export { CreateUserController }