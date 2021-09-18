import { getCustomRepository } from 'typeorm';

import { House } from "../../entities/House";
import { HouseRepository } from '../../repositories/HouseRepository';

interface IRequest{
    name:string;
    description:string;
    value:number;
    state:string;
    address:string;
    district:string;
    city:string;
    num:string;
}

class CreateHouseService{
    async execute(data:IRequest):Promise<House>{
        const houseRepository = getCustomRepository(HouseRepository);

        const house = await houseRepository.create(data);

        return house;
    }
}

export { CreateHouseService }