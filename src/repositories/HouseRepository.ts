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
}

export { HouseRepository }