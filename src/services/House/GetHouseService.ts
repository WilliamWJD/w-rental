import { getCustomRepository } from "typeorm";
import { House } from "../../entities/House";
import { HouseRepository } from "../../repositories/HouseRepository";

interface IRequest{
    id:string;
    user_id:string;
}

class GetHouseService{
    async execute({ id, user_id }:IRequest):Promise<House | undefined>{
        const houseRepository = getCustomRepository(HouseRepository);

        const house = await houseRepository.findById(id, user_id);

        return house;
    }
}

export { GetHouseService }