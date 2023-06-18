"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/users", (req, res) => {
    res.json({ message: "Hello, World!" });
});
exports.default = router;
//# sourceMappingURL=UserRouter.js.map