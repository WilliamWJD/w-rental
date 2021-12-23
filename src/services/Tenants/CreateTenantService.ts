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
    user_id:string
}

class CreateTenantService{
    async execute(data:IRequest):Promise<Tenant>{
        const tenantRepository = getCustomRepository(TenantRepository);

        // verifica se existe um inquilino com cpf existente cadastrado para o usuário logado
        const checkTenantCpf = await tenantRepository.findByCpf(data.cpf, data.user_id)
        
        if(checkTenantCpf){
            throw new Error("Tenant with cpf duplicated")
        }

        // verifica se existe um inquilino com rg existente cadastrado para o usuário logado
        const checkTenantRg = await tenantRepository.findByRg(data.rg, data.user_id);
        
        if(checkTenantRg){
            throw new Error("Tenant with rg duplicated")
        }

        const tenant = await tenantRepository.createTenant(data)
        
        return tenant;
    };
}

export { CreateTenantService }