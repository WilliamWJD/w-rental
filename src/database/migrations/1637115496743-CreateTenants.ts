import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTenants1631659785237 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"tenants",
                columns:[
                    {
                        name:"id",
                        type:"uuid",
                        isPrimary:true,
                    },
                    {
                        name:"name",
                        type:"varchar",
                    },
                    {
                        name:"birth",
                        type:"varchar",
                    },
                    {
                        name:"rg",
                        type:"varchar",
                    },
                    {
                        name:"cpf",
                        type:"varchar",
                    },
                    {
                        name:"marital_status",
                        type:"varchar",
                    },
                    {
                        name:"profession",
                        type:"varchar",
                    },
                    {
                        name:"email",
                        type:"varchar",
                    },
                    {
                        name:"fone1",
                        type:"varchar",
                    },
                    {
                        name:"fone2",
                        type:"varchar",
                    },
                    {
                        name:"status",
                        type:"boolean",
                        default:true
                    },
                    {
                        name: "user_id",
                        type: "uuid"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKUserTenant",
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
        await queryRunner.dropTable("tenants")
    }

}