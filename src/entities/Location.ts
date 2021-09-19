import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';
import { House } from './House';
import { Tenant } from './Tenant';

@Entity("locations")
class Location{
    @PrimaryColumn()
    id:string;

    @Column()
    date_start:Date;

    @Column()
    date_end:Date;

    @ManyToOne(()=> House )
    @JoinColumn({ name: "house_id" })
    house:House;

    @Column()
    house_id:string;

    @ManyToOne(()=> Tenant )
    @JoinColumn({ name: "tenant_id" })
    tenant:Tenant;

    @Column()
    tenant_id:string;

    @Column()
    contract_time:number;

    @Column()
    is_active:boolean;

    @CreateDateColumn()
    created_at:Date;

    @UpdateDateColumn()
    updated_at:Date;

    constructor(){
        if(!this.id){
            this.id=uuidV4();
        }
    }
}

export { Location }