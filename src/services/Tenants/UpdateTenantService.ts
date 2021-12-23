import { getCustomRepository } from "typeorm";
import { Tenant } from "../../entities/Tenant";
import { TenantRepository } from "../../repositories/TenantRepository";

interface IRequest {
    id: string;
    name: string;
    birth: Date;
    rg: string;
    cpf: string;
    marital_status: string;
    profession: string;
    email: string;
    fone1: string;
    fone2: string;
    user_id: string
}

class UpdateTenantService {
    async execute(data: IRequest): Promise<Tenant> {
        const tenantRepository = getCustomRepository(TenantRepository);

        const tenant = await tenantRepository.get(data.id, data.user_id);

        if (!tenant) {
            throw new Error("Tenant not found")
        }

        // verifica se existe um inquilino com cpf existente cadastrado para o usuário logado
        // e se o inquilino encontrado é diferente do que foi passado por parametro
        const checkTenantCpf = await tenantRepository.findByCpf(data.cpf, data.user_id)

        if (checkTenantCpf && checkTenantCpf.id !== data.id) {
            throw new Error("Tenant with cpf duplicated")
        }

        // verifica se existe um inquilino com rg existente cadastrado para o usuário logado
        // e se o inquilino encontrado é diferente do que foi passado por parametro
        const checkTenantRg = await tenantRepository.findByRg(data.rg, data.user_id);

        if (checkTenantRg && checkTenantRg.id !== data.id) {
            throw new Error("Tenant with rg duplicated")
        }

        tenant.name = data.name;
        tenant.birth = data.birth;
        tenant.rg = data.rg;
        tenant.cpf = data.cpf;
        tenant.marital_status = data.marital_status;
        tenant.profession = data.profession;
        tenant.email = data.email;
        tenant.fone1 = data.fone1;
        tenant.fone2 = data.fone2;
        tenant.user_id = data.user_id;

        const updateTenant = await tenantRepository.update(tenant);

        return updateTenant
    }
}

export { UpdateTenantService }