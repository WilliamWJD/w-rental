import { getCustomRepository } from "typeorm";
import { sign } from 'jsonwebtoken';

import { HashProvider } from "../../providers/HashProvider";
import { UserRepository } from "../../repositories/UserRepository"

interface IRequest{
    username:string;
    password:string;
}

interface IResponse{
    token:string;
    user:{
        name:string;
    }
}

class CreateAuthenticatedService{
    async execute({ username, password }:IRequest):Promise<IResponse>{
        const userRepository = getCustomRepository(UserRepository);
        const hashProvider = new HashProvider();

        const user = await userRepository.findUsername(username);

        if(!user){
            throw new Error("Email ou senha inválidos!")
        }

        const passwordMath = await hashProvider.compare(password, user.password);

        if(!passwordMath){
            throw new Error("Email ou senha inválidos!")
        }
        
        const token = sign({}, process.env.SECRET_KEY as string, {
            subject: user.id,
            expiresIn:"1d"
        })

        const tokenReturn:IResponse = {
            user:{
                name: user.name
            },
            token
        }

        return tokenReturn
    }
}

export { CreateAuthenticatedService }