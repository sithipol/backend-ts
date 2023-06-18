"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserTable1687021404488 = void 0;
const typeorm_1 = require("typeorm");
class CreateUserTable1687021404488 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "users",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                },
                {
                    name: "first_name",
                    type: "varchar",
                    length: "255",
                },
                {
                    name: "last_name",
                    type: "varchar",
                    length: "255",
                },
                {
                    name: "gender",
                    type: "int",
                },
                {
                    name: "birthday",
                    type: "datetime",
                },
                {
                    name: "image",
                    type: "varchar",
                    length: "255",
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("users");
    }
}
exports.CreateUserTable1687021404488 = CreateUserTable1687021404488;
//# sourceMappingURL=1687021404488-CreateUserTable.js.map