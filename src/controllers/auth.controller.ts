import { Request, Response } from 'express';
import { User } from "../models";
import { CreateUserInput, LoginUserSchema } from "../schemas/user.schemas";
import { AppDataSource } from '../utils/data-source';
import {StatusCodes} from 'http-status-codes';
import {responseFormat} from '../utils/ResponseFormat';
import { validationResult } from 'express-validator';

const userRepository = AppDataSource.getRepository(User);

class AuthController{
  //[POST] /auth/register
  static async registerUser(req: Request, res: Response) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(StatusCodes.BAD_REQUEST).json(responseFormat(false, {
          message: 'Validation error in request body',
          errors: errors.array(),
        }));
      }
      const payload : CreateUserInput = req.body
  
      const { email } = payload;
  
      const isEmailExist = await userRepository.findOne({ where: { email: email } });
      if (isEmailExist) {
        return res.status(StatusCodes.NOT_FOUND).json(responseFormat(false, {
          message: `${email} already exists, Please enter another email!!!`
        }))
      }
  
      const newUser = await AppDataSource.manager.save(AppDataSource.manager.create(User, payload))

      if (!newUser || !(newUser instanceof User)) {
        return res.status(StatusCodes.BAD_REQUEST).json(responseFormat(false, {
            message: 'User creation failed!!!'
        }))
      }

      return res.status(StatusCodes.CREATED).json(responseFormat(true, {
        message: 'user created successfully!!!'
      }, newUser))
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(responseFormat(false, {
        message: 'Internal Server Error',
        error: error,
      }));
    }
  };

  //[POST] /auth/login
  static async loginUser(req: Request, res: Response) {
    let payload: LoginUserSchema = req.body
    const { email, password } = payload;
    const user = await userRepository.findOne({where: { email: email }});
    if (user && user.password === password) {
      return user;
    } else {
      return null;
    }
  };

  // [GET] /auth/:id
  static async getUser(req: Request, res: Response){
    try {
        const id = Number(req.params.id);
        const user = await userRepository.findOne({where: { id: id }});
        if (user) {
          res.json(user);
        } else {
          res.status(404).json({ error: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default AuthController;
