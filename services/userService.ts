import { User } from "../models/userModel.js";
import { create } from "../DAL/data.js";

export const userLogin = async (user: User): Promise<User | unknown> => {
    const userToAdd: User | unknown = await create(user);  
    return userToAdd;
  };


  export const userGrades = async (user: User): Promise<User | unknown> => {
    const userToAdd: User | unknown = await create(user);  
    return userToAdd;
  };


  export const userGradesAverage = async (user: User): Promise<User | unknown> => {
    const userToAdd: User | unknown = await create(user);  
    return userToAdd;
  };