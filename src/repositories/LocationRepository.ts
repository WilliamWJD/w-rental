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
}

export { LocationRepository }