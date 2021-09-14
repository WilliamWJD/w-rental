import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';

@Entity("tenants")
class Tenant{
    @PrimaryGeneratedColumn()
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

    constructor(){
        if(!this.id){
            this.id === uuidv4();   
        }
    }
}

export { Tenant }