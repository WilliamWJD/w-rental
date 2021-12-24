import { getCustomRepository } from "typeorm"
import { House } from "../../entities/House";
import { HouseRepository, HouseRepository } from "../../repositories/HouseRepository"

interface IRequest{
    user_id:string;
}

class ListHousesService{
    async execute({ user_id }:IRequest):Promise<House[]>{
        const houseRepository = getCustomRepository(HouseRepository);
        const houses = await houseRepository.findAll(user_id);
        return houses;
    }
}

export { ListHousesService }