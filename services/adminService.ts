import { User } from "../models/userModel.js";
import { create } from "../DAL/data.js";

export const adminRegister = async (user: User): Promise<User | unknown> => {
    const userToAdd: User | unknown = await create(user);  
    return userToAdd;
  };