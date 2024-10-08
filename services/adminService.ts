import { User } from "../models/userModel.js";
import { createUser } from "../DAL/data.js";

export const adminRegister = async (user: User): Promise<User> => {
    const userToAdd: User = await createUser(user);  
    return userToAdd;
  };