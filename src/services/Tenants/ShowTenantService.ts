import { getCustomRepository } from "typeorm";
import { Tenant } from "../../entities/Tenant";
import { TenantRepository } from "../../repositories/TenantRepository";

interface Request{
    id:string;
    user_id:string;
}

class ShowTenantService{
    async execute({ id, user_id }:Request):Promise<Tenant | undefined>{
        const tenantRepository = getCustomRepository(TenantRepository);

        const tenant = await tenantRepository.get(id, user_id);

        return tenant;
    }
}

export { ShowTenantService }