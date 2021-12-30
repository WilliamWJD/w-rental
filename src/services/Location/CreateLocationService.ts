import { getCustomRepository } from 'typeorm';
import { addMonths } from 'date-fns';

import { Location } from '../../entities/Location';
import { LocationRepository } from '../../repositories/LocationRepository';

interface IRequest{
    date_start:Date;
    house_id:string;
    tenant_id:string;
    contract_time:number;
    user_id:string;
}

class CreateLocationService{
    async execute(data:IRequest):Promise<Location>{
        const locationRepository = getCustomRepository(LocationRepository);
        
        // verifica se existe um contrato de locação ativa para o imóvel desejado
        const checkLocationActiveHouse = await locationRepository.checkLocationActiveHouse(data.house_id, data.user_id);

        if(checkLocationActiveHouse){
            throw new Error('Esse imóvel já se encontra com uma locação ativa');
        }

        // não permite um tempo de contrato menor que 12 meses
        if(data.contract_time < 12){
            throw new Error('Não é permitido um tempo de contrato menor que 12 mêses!')
        }

        // Adiciona o tempo de contrato
        const dateStartContractFormat = Date.parse(String(data.date_start))
        const dateEndContract = addMonths(dateStartContractFormat, data.contract_time);

        const date_end = dateEndContract;

        const location = await locationRepository.create({...data, date_end});
        
        return location;
    }
}

export { CreateLocationService }