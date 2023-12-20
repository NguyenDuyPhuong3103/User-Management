import { getRepository } from "typeorm";
import { User } from "../models";

export interface IUserPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  bob: Date;
}

// export const getUsers = async (): Promise<Array<User>> => {
//   const userRepository = getRepository(User);
//   return userRepository.find();
// };

export const createUser = async (payload: IUserPayload): Promise<User | null> => {
  const userRepository = getRepository(User);
  const { email } = payload;

  const isExists = await userRepository.findOne({ where: { email: email } });
  if (isExists) {
    return null;
  }

  const user = new User();
  return userRepository.save({
    ...user,
    ...payload,
  });
};

export const deleteUser = async (id: number): Promise<boolean> => {
  const userRepository = getRepository(User);

  const result = await userRepository.findOneByOrFail({id});
  if (!result) {
    return false;
  }

  await userRepository.remove(result);

  return true;
};

// export const getUser = async (id: number): Promise<User | null> => {
//   const userRepository = getRepository(User);
//   const user = await userRepository.findOne({where: { id: id }});
//   if (!user) return null;
//   return user;
// };