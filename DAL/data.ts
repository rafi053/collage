import { Grades, User } from "../models/userModel.js";
import  USER from "../schemas/userSchema.js";


export const create = async (user:User): Promise<User> => {
        const userToAdd: User = await USER.create(user);
        return userToAdd;
};

export const get = async (fullName: string, password: string): Promise<User> => {
        const userToAdd: any= await USER.find({ fullName: fullName, password: password });
        return userToAdd;
};

export const findUser = async (id: string): Promise<User> => {
        const user: any = await USER.find({ _id: id });
        return user;
};

export const getAll = async (): Promise<User[]> => {
        const users: User [] = await USER.find();
        return users;
};

export const dleate = async (id: string, grade:number): Promise<User | unknown> => {
        const userToAdd: User | unknown = await USER.deleteOne({ _id: id });
        return userToAdd;
};


export const edit = async (id: string, grade:number): Promise<User | unknown> => {
        const userToAdd: User | unknown = await USER.find({ _id: id });
        return userToAdd;
};
