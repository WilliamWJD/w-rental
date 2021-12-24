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
    user_id:string;
}

class CreateHouseService{
    async execute(data:IRequest):Promise<House>{
        const houseRepository = getCustomRepository(HouseRepository);

        // verifica se existe uma casa com o mesmo nome cadastrado no banco de dados
        const searchHouseByName = await houseRepository.findByName(data.user_id, data.name);

        if(searchHouseByName){
            throw new Error("This house ia already exists")
        }

        const house = await houseRepository.create(data);

        return house;
    }
}

export { CreateHouseService }