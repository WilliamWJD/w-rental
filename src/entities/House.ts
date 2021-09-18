import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidV4 } from 'uuid';

@Entity('houses')
class House{
    @PrimaryGeneratedColumn()
    id:string;

    @Column()
    name:string;

    @Column()
    description:string;

    @Column()
    value:number;

    @Column()
    state:string;

    @Column()
    address:string;

    @Column()
    district:string;

    @Column()
    city:string;

    @Column()
    num:number;

    constructor(){
        if(!this.id){
            this.id=uuidV4();
        }
    }
}

export { House }