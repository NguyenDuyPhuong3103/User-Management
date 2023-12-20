import { Request, Response, NextFunction } from 'express';
import { User } from "../models";
import {
//   getUsers,
  createUser,
  deleteUser,
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
    // }


    //[POST] /
    public async createUser(body: IUserPayload): Promise<User | null> {
      return createUser(body);
    }

    //[DELETE] /
    public async deleteUser(_id: string): Promise<boolean> {
        const id = Number(_id);
        return deleteUser(id);
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
    //}
}
