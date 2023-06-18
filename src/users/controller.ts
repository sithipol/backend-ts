import { Request, Response } from "express";
import { User } from "./user";
import { UserService } from "./service";

export class UserController {
  //   private userService;

  //   constructor() {
  //     this.userService = new UserService();
  //   }

  async getUsers(_req: Request, res: Response) {
    const userService = new UserService();
    // const id: string = req.params.id;
    try {
      const user = await userService.getUsers();
      //   console.log(id);
      if (user) {
        res.json(user);
      } else {
        res.json({ error: "User not found" });
      }
    } catch (error) {
      console.log(error);
      res.json({ error: "Failed to fetch user", erre: error });
    }
  }
  async getUser(req: Request, res: Response) {
    const userService = new UserService();
    const id: string = req.params.id;
    try {
      const user = await userService.getUser(id);

      if (user) {
        res.json(user[0]);
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch user" });
    }
  }

  public async createUser(req: Request, res: Response) {
    const userService = new UserService();
    const userData: User = req.body;
    if (req.file?.filename) {
      userData.image = req.file?.filename;
    }

    //   console.log(();
    // this.userData.image = req.file?.filename;
    // console.log((userData.image = );

    try {
      const user = await userService.createUser(userData);

      res
        .status(201)
        .json({ message: "User created successfully", data: user });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Failed to create user" });
    }
  }
  async updateUser(req: Request, res: Response) {
    const userService = new UserService();
    const userData: User = req.body;
    const id: string = req.params.id;
    if (req.file?.filename) {
      userData.image = req.file?.filename;
    }

    try {
      const user = await userService.updateUser(userData, id);
      res.json({ message: "User updated successfully", data: user });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Failed to update user" });
    }
  }

  async deleteUser(req: Request, res: Response) {
    const userService = new UserService();
    const id: string = req.params.id;

    try {
      const user = await userService.deleteUser(id);
      res.status(200).json({ message: "User Delete successfully", data: user });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Failed to delete user" });
    }
  }
}
