import { getCustomRepository } from 'typeorm';
import { addMonths, parseISO } from 'date-fns';

import { Location } from '../../entities/Location';
import { LocationRepository } from '../../repositories/LocationRepository';

interface IRequest{
    date_start:Date;
    date_end:Date;
    house_id:string;
    tenant_id:string;
    contract_time:number;
}

class CreateLocationService{
    async execute(data:IRequest):Promise<Location>{
        const locationRepository = getCustomRepository(LocationRepository);
        
        // verifica se existe um contrato de locação ativa para o imóvel desejado
        const checkLocationActiveHouse = await locationRepository.checkLocationActiveHouse(data.house_id);

        if(checkLocationActiveHouse){
            throw new Error('Esse imóvel já se encontra com uma locação ativa');
        }

        // Adiciona o tempo de contrato
        const dateStartContractFormat = Date.parse(String(data.date_start))
        const dateEndContract = addMonths(dateStartContractFormat, data.contract_time);

        data.date_end = dateEndContract;

        const location = await locationRepository.create(data);
        
        return location;
    }
}

export { CreateLocationService }