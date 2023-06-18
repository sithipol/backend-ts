"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./users/router"));
const db_config_1 = __importDefault(require("../config/db.config"));
const app = (0, express_1.default)();
const port = 3001;
app.use("/", router_1.default);
db_config_1.default.connect((err) => {
    if (err) {
        console.error("Error connecting to the database:", err);
        return;
    }
    console.log("Connected to the database");
    app.listen(port, () => {
        console.log("Server is running on port " + port);
    });
});
//# sourceMappingURL=index.js.map