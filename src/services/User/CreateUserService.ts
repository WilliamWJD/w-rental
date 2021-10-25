import { getCustomRepository } from "typeorm";
import { User } from "../../entities/User";
import { HashProvider } from "../../providers/HashProvider";
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
        const hashProvider = new HashProvider();

        const user = await repository.create({
            name,
            username,
            email,
            password: await hashProvider.hashGenerator(password)
        })

        return user;
    }
}

export { CreateUserService }