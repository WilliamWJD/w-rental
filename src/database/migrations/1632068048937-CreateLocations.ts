import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateLocations1632068048937 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"locations",
                columns: [
                    {
                        name:"id",
                        type:"uuid",
                        isPrimary:true
                    },
                    {
                        name:"date_start",
                        type:"date",
                        isNullable:false
                    },
                    {
                        name:"date_end",
                        type:"date",
                        isNullable:false
                    },
                    {
                        name:"house_id",
                        type:"uuid"
                    },
                    {
                        name:"tenant_id",
                        type:"uuid"
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
                    }
                ],
                foreignKeys:[
                    {
                        name:"FKHouseLocation",
                        referencedTableName:"houses",
                        referencedColumnNames:["id"],
                        columnNames:["house_id"],
                        onDelete:"SET NULL",
                        onUpdate:"SET NULL"
                    },
                    {
                        name:"FKTenantLocation",
                        referencedTableName:"tenants",
                        referencedColumnNames:["id"],
                        columnNames:["tenant_id"],
                        onDelete:"SET NULL",
                        onUpdate:"SET NULL"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("locations")
    }

}
