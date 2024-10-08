import { Request, Response, NextFunction } from 'express';
import { userLogin, userGrades, userGradesAverage } from "../services/userService.js";
import { Grades, User } from '../models/userModel.js';


export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { fullName, password  } = req.body;

    if (!fullName || !password) {
      res.status(400).json({ error: "Username and password are required." });
      return;
    }

    const user:User = await userLogin(fullName, password);
    if (!user) {
      res.status(401).json({ error: "Invalid username or password." });
      return;
    }
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};



export const grades = async (req: Request, res: Response): Promise<void> => {
    try {
      const gradesUser: string = req.params.id;
      const grades:Grades[] = await userGrades(gradesUser);
      res.status(201).json({ grades });
    } catch (error: any) {
      if (error.message === "Username already exists.") {
        res.status(409).json({ error: error.message });
      } else {
        console.error("Error registering user:", error);
        res.status(500).json({ error: "Internal server error." });
      }
    }
  };




  export const gradesAverage = async (req: Request, res: Response): Promise<void> => {
    try {
      const gradesUser: string = req.params.id;
      const gradesAverage:number = await userGradesAverage(gradesUser);
      res.status(201).json({ gradesAverage });
    } catch (error: any) {
      if (error.message === "Username already exists.") {
        res.status(409).json({ error: error.message });
      } else {
        console.error("Error registering user:", error);
        res.status(500).json({ error: "Internal server error." });
      }
    }
  };
