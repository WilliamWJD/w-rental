import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';
import { User } from "./User";

@Entity("tenants")
class Tenant{
    @PrimaryColumn()
    id: string;

    @Column()
    name:string;

    @Column()
    birth:Date;

    @Column()
    rg:string;

    @Column()
    cpf:string;

    @Column()
    marital_status:string;

    @Column()
    profession:string;

    @Column()
    email:string;

    @Column()
    fone1:string;
    
    @Column()
    fone2:string;

    @ManyToOne(()=>User)
    @JoinColumn({
        name:"user_id"
    })
    user: User;

    @Column()
    user_id: string;

    @Column()
    status: boolean

    
    constructor(){
        if(!this.id){
            this.id = uuidv4();   
        }
    }
}

export { Tenant }