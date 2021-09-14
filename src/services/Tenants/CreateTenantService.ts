import { Tenant } from '../../entities/Tenant';
import { TenantRepository } from '../../repositories/TenantRepository'
import { getCustomRepository } from 'typeorm';

interface IRequest{
    name:string;
    birth:string;
    rg:string;
    cpf:string;
    marital_status:string;
    profession:string;
    email:string;
    fone1:string;
    fone2:string;
}

class CreateTenantService{
    async execute(data:IRequest):Promise<Tenant>{
        const tenantRepository = getCustomRepository(TenantRepository);

        const tenant = await tenantRepository.createTenant(data)
        return tenant;
    };
}

export { CreateTenantService }