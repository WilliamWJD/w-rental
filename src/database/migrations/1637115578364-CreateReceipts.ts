import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class receipts1632777960659 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:'receipts',
                columns:[
                    {
                        name:"id",
                        type:"uuid",
                        isPrimary:true
                    },
                    {
                        name:"location_id",
                        type:"uuid"
                    },
                    {
                        name:"date_start",
                        type:"date"
                    },
                    {
                        name:"date_end",
                        type:"date"
                    },
                    {
                        name:"energy_value",
                        type:"numeric"
                    },
                    {
                        name:"water_value",
                        type:"numeric"
                    },
                    {
                        name:"receipt_number",
                        type:"numeric"
                    },
                    {
                        name: "user_id",
                        type: "uuid"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
                foreignKeys:[
                    {
                        name:"FKLocationReceipt",
                        referencedTableName:"locations",
                        referencedColumnNames:["id"],
                        columnNames:["location_id"],
                        onDelete:"SET NULL",
                        onUpdate:"SET NULL"
                    },
                    {
                        name: "FKUserReceipt",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('receipts')
    }

}