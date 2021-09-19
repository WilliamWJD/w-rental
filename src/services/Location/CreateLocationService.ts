import { getCustomRepository } from 'typeorm';
import { Location } from '../../entities/Location';
import { LocationRepository } from '../../repositories/LocationRepository';

interface IRequest{
    date_start:Date;
    date_end:Date;
    house_id:string;
    tenant_id:string;
}

class CreateLocationService{
    async execute(data:IRequest):Promise<Location>{
        const locationRepository = getCustomRepository(LocationRepository);
        const location = await locationRepository.create(data);
        return location;
    }
}

export { CreateLocationService }