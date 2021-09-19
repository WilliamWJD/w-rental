import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity("locations")
class Location{
    @PrimaryColumn()
    id:string;

    @Column()
    date_start:Date;

    @Column()
    date_end:Date;

    @Column()
    house_id:string;

    @Column()
    tenant_id:string;

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