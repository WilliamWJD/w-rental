import { getCustomRepository } from "typeorm"
import { TenantRepository } from "../../repositories/TenantRepository"

interface Request{
    id:string;
    user_id:string;
}

class DeleteTenantService{
    async execute({ id, user_id }:Request):Promise<void>{
        const tenantRepository = getCustomRepository(TenantRepository);
        await tenantRepository.delete(id, user_id);
        return;
    }
}

export { DeleteTenantService }