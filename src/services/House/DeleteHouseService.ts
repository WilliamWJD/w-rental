import { getCustomRepository } from "typeorm"
import { HouseRepository } from "../../repositories/HouseRepository"

interface IRequest{
    id:string;
    user_id:string;
}

class DeleteHouseService{
    async execute({ id, user_id }:IRequest):Promise<void>{
        const houseRepository = getCustomRepository(HouseRepository);

        // verifica se o imóvel existe
        const checkHouse = await houseRepository.findById(id, user_id);

        if(!checkHouse){
            throw new Error("House not found")
        }

        // delete o imóvel
        await houseRepository.delete(id, user_id);

        return
    }
}

export { DeleteHouseService }