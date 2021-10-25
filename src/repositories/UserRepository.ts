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
}

export { UserRepository }