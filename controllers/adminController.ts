import { Request, Response, NextFunction } from 'express';
import { adminRegister } from "../services/adminService.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

import { User } from '../models/userModel.js';
const JWT_SECRET = process.env.JWT_SECRET as string;



export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const newUser: User = req.body;

    if (!newUser) {
      res.status(400).json({ error: "Username and password are required." });
      return;
    }

    const user:User = await adminRegister(newUser);
    res.status(201).json({user});
  } catch (error: any) {
    if (error.message === "Username already exists.") {
      res.status(409).json({ error: error.message });
    } else {
      console.error("Error registering user:", error);
      res.status(500).json({ error: "Internal server error." });
    }
  }
};


