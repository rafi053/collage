import { Grades, User } from "../models/userModel.js";
import  USER from "../schemas/userSchema.js";


export const create = async (user:User): Promise<User | unknown> => {
        const userToAdd: User | unknown = await USER.create(user);
        return userToAdd;
};

export const get = async (fullName: string, password: string): Promise<User | unknown> => {
        const userToAdd: User | unknown = await USER.find({ fullName: fullName, password: password });
        return userToAdd;
};

export const find = async (id: string): Promise<Grades[]> => {
        const grades: Grades[] = await USER.find({ _id: id });
        return grades;
};


