import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken';
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository";

interface IPayload{
    sub:string;
}

export async function EnsureAuthenticated(req:Request, res:Response, next:NextFunction){
    try{
        const authHeader = req.headers.authorization;

        if(!authHeader){
            return res.status(401).json({ error: 'Token não fornecido' })
        }

        const [, token] = authHeader.split(' ');

        const { sub: user_id } = verify(token, process.env.SECRET_KEY as string) as IPayload;

        const userRepository = getCustomRepository(UserRepository);

        const checkUser = await userRepository.findById(user_id);

        if(!checkUser){
            return res.status(401).json({ error: 'Usuário não encontrado' })
        }

        req.user = {
            id: user_id
        }

        next();

    }catch(err:any){
        return res.status(401).json({ error: 'Token invalido' })
    }
}