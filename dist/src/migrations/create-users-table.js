"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUsersTable1624910535000 = void 0;
const typeorm_1 = require("typeorm");
class CreateUsersTable1624910535000 {
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
exports.CreateUsersTable1624910535000 = CreateUsersTable1624910535000;
//# sourceMappingURL=create-users-table.js.map