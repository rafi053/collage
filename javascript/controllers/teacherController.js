"use strict";
// import { Request, Response, NextFunction } from 'express';
// import { userNamePassword } from '../models/types.js'
// import { registerUser, authenticateUser } from "../services/userService.js";
// import jwt from 'jsonwebtoken';
// import dotenv from 'dotenv';
// dotenv.config();
// const JWT_SECRET = process.env.JWT_SECRET as string;
// import { User } from '../models/types.js';
// export const register = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const newUser: User = req.body;
//     if (!newUser) {
//       res.status(400).json({ error: "Username and password are required." });
//       return;
//     }
//     const user:User = await registerAdmin(newUser);
//     res.status(201).json({ user });
//   } catch (error: any) {
//     if (error.message === "Username already exists.") {
//       res.status(409).json({ error: error.message });
//     } else {
//       console.error("Error registering user:", error);
//       res.status(500).json({ error: "Internal server error." });
//     }
//   }
// };
