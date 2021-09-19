import { EntityRepository, getRepository, Repository } from "typeorm";
import ILocation from "../dtos/ILocation";
import { Location } from '../entities/Location';

@EntityRepository()
class LocationRepository{
    private repository:Repository<Location>

    constructor(){
        this.repository = getRepository(Location)
    }

    async create(data:ILocation):Promise<Location>{
        const location = this.repository.create(data);
        await this.repository.save(location);
        return location;
    }

    async checkLocationActiveHouse(house_id:string):Promise<Location | undefined>{
        const location = await this.repository.findOne({
            house_id,
            is_active:true
        })

        return location || undefined;
    }
}

export { LocationRepository }