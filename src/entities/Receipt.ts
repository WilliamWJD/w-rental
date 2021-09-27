import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidV4 } from 'uuid';

@Entity("receipts")
class Receipt{
    @PrimaryColumn()
    id:string;

    @Column()
    location_id:string;

    @Column()
    date_start:Date;

    @Column()
    date_end:Date;

    @Column()
    energy_value:number;

    @Column()
    water_value:number;

    @Column()
    receipt_number:number;

    @CreateDateColumn()
    created_at:Date;

    @UpdateDateColumn()
    updated_at:Date;

    constructor(){
        if(!this.id){
            this.id = uuidV4();
        }
    }
}

export { Receipt }