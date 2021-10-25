import { EntityRepository, getRepository, Repository } from "typeorm";
import { IUser } from "../dtos/IUser";
import { User } from "../entities/User";

@EntityRepository()
class UserRepository{
    private repository: Repository<User>;

    constructor(){
        this.repository = getRepository(User);
    }

    async create(data:IUser):Promise<User>{
        const user = this.repository.create(data);
        await this.repository.save(user);
        return user;
    }

    async findById(user_id:string):Promise<User | undefined>{
        const user = await this.repository.findOne({
            where:{
                id: user_id
            }
        })

        return user;
    }

    async findUsername(username: string):Promise<User | undefined>{
        const user = await this.repository.findOne({
            where:{
                username
            }
        })

        return user;
    }

    async findByMail(email:string):Promise<User | undefined>{
        const user = await this.repository.findOne({
            where:{
                email
            }
        })

        return user;
    }
}

export { UserRepository }