import { Router } from "express";
import { UserController } from "./controller";
// import { UserService } from "./service";
// import { UserServiceType } from "./user";
const router = Router();
const userController = new UserController();
router.get("/users", userController.getUsers);
router.get("/users/:id", userController.getUser);
router.post("/users", userController.createUser);
router.put("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);

export default router;
