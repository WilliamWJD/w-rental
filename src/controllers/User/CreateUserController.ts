import { Request, Response } from "express";
import { CreateUserService } from "../../services/User/CreateUserService";

class CreateUserController{
    async handle(req:Request, res:Response):Promise<Response>{
        const { name, username, email, password } = req.body;

        const createUserService = new CreateUserService();
        const user = await createUserService.execute({
            name,
            username,
            email,
            password
        })

        return res.status(201).json(user);
    }
}

export { CreateUserController }