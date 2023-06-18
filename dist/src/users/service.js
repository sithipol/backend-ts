"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const db_config_1 = __importDefault(require("../../config/db.config"));
class UserService {
    getUsers() {
        let query = "SELECT * FROM users";
        return new Promise((resolve, reject) => {
            db_config_1.default.query(query, (error, results) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(results);
                }
            });
        });
    }
    getUser(id) {
        let query = "SELECT * FROM users WHERE id = (?)";
        return new Promise((resolve, reject) => {
            db_config_1.default.query(query, [id], (error, results) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(results);
                }
            });
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=service.js.map