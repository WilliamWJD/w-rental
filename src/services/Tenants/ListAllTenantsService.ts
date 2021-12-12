import {getCustomRepository} from 'typeorm';
import {Tenant} from '../../entities/Tenant';
import { TenantRepository } from '../../repositories/TenantRepository';

interface Request{
    user_id:string;
}

class ListAllTenantsService{
    async execute({user_id}:Request):Promise<Tenant[]>{
        const tenantRepository = getCustomRepository(TenantRepository);
        const tenants = tenantRepository.getAll(user_id);
        return tenants;
    }
}

export {ListAllTenantsService}