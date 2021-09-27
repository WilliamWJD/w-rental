import { EntityRepository, getRepository, Repository } from "typeorm";
import IReceipt from "../dtos/IReceipt";
import { Receipt } from "../entities/Receipt";

@EntityRepository()
class ReceiptRepository{
    private repository: Repository<Receipt>

    constructor(){
        this.repository = getRepository(Receipt);
    }

    async create(data:IReceipt):Promise<Receipt>{
        const receipt = this.repository.create(data);
        await this.repository.save(receipt);
        return receipt;
    }

    async findReceiptsByLocationId(location_id:string):Promise<Receipt[]>{
        const receipts = await this.repository.find({
            location_id
        })

        return receipts;
    }
}

export { ReceiptRepository }