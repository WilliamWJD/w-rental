import { getCustomRepository } from "typeorm";
import { Receipt } from "../../entities/Receipt";
import { LocationRepository } from "../../repositories/LocationRepository";
import { ReceiptRepository } from "../../repositories/ReceiptRepository";

interface Request{
    date_start:Date;
    date_end:Date;
    energy_value:number;
    water_value:number;
    location_id:string;
    receipt_number?:number;
}

class CreateReceiptService{
    async execute(data:Request):Promise<Receipt>{
        const receiptRepository = getCustomRepository(ReceiptRepository)
        const locationRepository = getCustomRepository(LocationRepository);
        
        // verifica se existe um contrato de locação ativa para o imóvel desejado
        const checkLocationActiveHouse = await locationRepository.findById(data.location_id)

        console.log(checkLocationActiveHouse)

        if(!checkLocationActiveHouse){
            throw new Error('Essa locação não está ativa');
        }

        // verifica ultimo numero de recibo e incrementa automaticamente
        let receipt_number;

        const receiptsByLocation = await receiptRepository.findReceiptsByLocationId(data.location_id);
        
        console.log(receiptsByLocation.length)

        if(receiptsByLocation.length === 0){
            receipt_number = 1
        }else{
            receipt_number = receiptsByLocation.length + 1;
        }

        data.receipt_number = receipt_number;

        const receipt = await receiptRepository.create(data);
        return receipt;
    }
}

export { CreateReceiptService }