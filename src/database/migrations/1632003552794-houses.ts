import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class houses1632003552794 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:'houses',
                columns:[
                    {
                        name:"id",
                        type:"uuid",
                        isPrimary:true
                    },
                    {
                        name:"name",
                        type:"varchar",
                        isNullable:false
                    },
                    {
                        name:"description",
                        type:"varchar"
                    },
                    {
                        name:"value",
                        type:"numeric"
                    },
                    {
                        name:"state",
                        type:"varchar"
                    },
                    {
                        name:"address",
                        type:"varchar"
                    },
                    {
                        name:"district",
                        type:"varchar"
                    },
                    {
                        name:"city",
                        type:"varchar"
                    },
                    {
                        name:'num',
                        type:'numeric'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('houses')
    }

}
