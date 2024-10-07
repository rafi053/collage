import { User } from "../models/userModel.js";
import  USER from "../schemas/userSchema.js";

export const create = async (user: User): Promise<User | unknown> => {
        const userToAdd: User | unknown = await USER.create(user);
        return userToAdd;
};

