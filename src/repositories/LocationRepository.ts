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

    async listAll(user_id:string):Promise<Location[]>{
        const locations = await this.repository.find({
            relations:[
                'user','tenant','house'
            ],
            where:{
                user_id
            }
        })

        return locations;
    }

    async checkLocationActiveHouse(house_id:string, user_id: string):Promise<Location | undefined>{
        const location = await this.repository.findOne({
            where:{
                house_id,
                user_id,
                is_active:true
            }
        })

        return location || undefined;
    }

    async findById(location_id:string):Promise<Location | undefined>{
        const location = await this.repository.findOne({
            where:{
                id:location_id,
                is_active:true
            }
        })

        return location
    }
}

export { LocationRepository }