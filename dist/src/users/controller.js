"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const service_1 = require("./service");
class UserController {
    constructor() {
        this.userService = new service_1.UserService();
    }
    async getUsers(res) {
        try {
            const user = await this.userService.getUsers();
            if (user) {
                res.json(user);
            }
            else {
                res.status(404).json({ error: "User not found" });
            }
        }
        catch (error) {
            res.status(500).json({ error: "Failed to fetch user" });
        }
    }
    async getUser(req, res) {
        const id = req.params.id;
        try {
            const user = await this.userService.getUser(id);
            if (user) {
                res.json(user);
            }
            else {
                res.status(404).json({ error: "User not found" });
            }
        }
        catch (error) {
            res.status(500).json({ error: "Failed to fetch user" });
        }
    }
}
exports.UserController = UserController;
//# sourceMappingURL=controller.js.map