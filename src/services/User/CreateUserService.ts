import { getCustomRepository } from "typeorm";
import { User } from "../../entities/User";
import { UserRepository } from "../../repositories/UserRepository";

interface IRequest{
    name:string;
    username:string;
    email:string;
    password:string;
}

class CreateUserService{
    async execute({ name, username, email, password }:IRequest):Promise<User>{
        const repository = getCustomRepository(UserRepository);
        const user = await repository.create({
            name,
            username,
            email,
            password
        })
        return user;
    }
}

export { CreateUserService }