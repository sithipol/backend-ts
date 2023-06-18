"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const router = (0, express_1.Router)();
const userController = new controller_1.UserController();
router.get("/users", userController.getUser);
router.get("/users/:id", userController.getUser);
exports.default = router;
//# sourceMappingURL=router.js.map