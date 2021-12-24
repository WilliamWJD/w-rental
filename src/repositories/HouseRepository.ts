import { EntityRepository, getRepository, Repository } from "typeorm";
import IHouse from "../dtos/IHouse";
import { House } from "../entities/House";

@EntityRepository()
class HouseRepository{
    private repository:Repository<House>
    
    constructor(){
        this.repository = getRepository(House)
    }
    
    async create(data:IHouse):Promise<House>{
        const house = this.repository.create(data)
        await this.repository.save(house);
        return house;
    }

    async findByName(user_id: string, name:string):Promise<House|undefined>{
        const house = await this.repository.findOne({
            user_id,
            name
        });
        return house;
    }

    async findAll(user_id:string):Promise<House[]>{
        const houses = await this.repository.find({
            where:{
                user_id
            }
        })

        return houses;
    }
}

export { HouseRepository }