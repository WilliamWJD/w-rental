import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from 'uuid';
import { User } from "./User";

@Entity('houses')
class House{
    @PrimaryColumn()
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

    @ManyToOne(()=>User)
    @JoinColumn({
        name:"user_id"
    })
    user: User;

    @Column()
    user_id: string;

    constructor(){
        if(!this.id){
            this.id=uuidV4();
        }
    }
}

export { House }