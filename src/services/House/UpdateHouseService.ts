import { getCustomRepository } from "typeorm";
import { House } from "../../entities/House";
import { HouseRepository } from "../../repositories/HouseRepository";

interface IRequest{
    id:string;
    name:string;
    description:string;
    value:number;
    state:string;
    address:string;
    district:string;
    city:string;
    num:number;
    user_id:string;
}

class UpdateHouseService{
    async execute(data:IRequest):Promise<House>{
        const houseRepository = getCustomRepository(HouseRepository);

        // verifica se o imóvel existe
        const house = await houseRepository.findById(data.id, data.user_id);

        if(!house){
            throw new Error("House not found")
        }

        // verifica se existe um imóvel cadastrado com o mesmo nome
        const checkHouseByName = await houseRepository.findByName(data.user_id, data.name);
        
        if(checkHouseByName && checkHouseByName.id !== data.id){
            throw new Error("House with name duplicated")
        }

        house.name = data.name;
        house.description = data.description;
        house.value = data.value;
        house.state = data.state;
        house.address = data.address;
        house.district = data.district;
        house.city = data.city;
        house.num = data.num;
        house.user_id = data.user_id;

        // atualiza imóvel
        const updatedHouse = await houseRepository.update(house);

        return updatedHouse
    }
}

export { UpdateHouseService }