import { EntityRepository, getRepository, Repository } from "typeorm";
import ITenant from "../dtos/ITenant";
import { Tenant } from "../entities/Tenant"

@EntityRepository()
class TenantRepository{
    private repository:Repository<Tenant>;
    
    constructor(){
        this.repository = getRepository(Tenant);
    }

    async createTenant(data:ITenant):Promise<Tenant>{
        const tenant = this.repository.create(data);
        await this.repository.save(tenant);
        return tenant;
    }

    async getAll(user_id: string):Promise<Tenant[]>{
        const tenants = await this.repository.find({
            where:{
                user_id
            }
        })

        return tenants;
    }

    async get(id:string, user_id:string):Promise<Tenant | undefined>{
        const tenant = await this.repository.findOne({
            id,
            user_id
        })

        return tenant;
    }

    async delete(id:string, user_id:string ):Promise<void>{
        await this.repository.delete({
            id,
            user_id
        })
        return;
    }

    async findByCpf(cpf:string, user_id:string):Promise<Tenant | undefined>{
        const tenant = await this.repository.findOne({
            cpf,
            user_id
        });
        return tenant;
    }

    async findByRg(rg:string, user_id:string):Promise<Tenant | undefined>{
        const tenant = await this.repository.findOne({
            rg,
            user_id
        });
        return tenant;
    }

    async update(data: Tenant):Promise<Tenant>{
        const tenant = await this.repository.save(data);
        return tenant;
    }
}

export { TenantRepository }