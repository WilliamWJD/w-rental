import { getCustomRepository } from "typeorm";
import { Location } from "../../entities/Location";
import { LocationRepository } from "../../repositories/LocationRepository";

interface IRequest{
    user_id:string;
}

class ListAllLocationsService{
    async execute({ user_id }:IRequest):Promise<Location[]>{
        const locationsRepository = getCustomRepository(LocationRepository);
        const locations = await locationsRepository.listAll(user_id);
        return locations;
    }
}

export { ListAllLocationsService }