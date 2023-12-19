import { Request, Response, NextFunction } from 'express';
import {
//   getUsers,
  createUser,
  IUserPayload,
//   getUser,
} from "../repositories/user";

export default class UserController{
    //[GET] /
    // public async getUsers(req: Request, res: Response, next: NextFunction): Promise<void> {
    //     try {
    //         const users = await getUsers();
    //         res.json(users);
    //     } catch (error) {
    //         res.status(500).json({ error: "Internal Server Error" });
    //     }

    //[POST] /
    public async createUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const body: IUserPayload = req.body;
            const user = await createUser(body);
            res.json(user);
          } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
          }

    //[GET] /
    // public async getUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    //     try {
    //         const id = Number(req.params.id);
    //         const user = await getUser(id);
    //         if (user) {
    //           res.json(user);
    //         } else {
    //           res.status(404).json({ error: "User not found" });
    //         }
    //       } catch (error) {
    //         res.status(500).json({ error: "Internal Server Error" });
    //       }
  }
}

// router.post("/users", async (req: Request, res: Response) => {
//   try {
//     const body: IUserPayload = req.body;
//     const user = await createUser(body);
//     res.json(user);
//   } catch (error) {
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// router.get("/users/:id", async (req: Request, res: Response) => {
//   try {
//     const id = Number(req.params.id);
//     const user = await getUser(id);
//     if (user) {
//       res.json(user);
//     } else {
//       res.status(404).json({ error: "User not found" });
//     }
//   } catch (error) {
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });
