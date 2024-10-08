import { Request, Response, NextFunction } from 'express';
import { userLogin, userGrades, userGradesAverage } from "../services/userService.js";
import { Grades, User } from '../models/userModel.js';


export const login = async (req: Request, res: Response): Promise<void> => {
  try {
      const studentId: string = req.params.id;
      const user = await userLogin(studentId);
      if (!user) {
          res.status(404).json({ error: "User not found." });
          return;
      }
      res.status(200).json({ user });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};



export const grades = async (req: Request, res: Response): Promise<void> => {
  try {
      const studentId: string = req.params.id;
      const usersGrades:Grades[] | null = await userGrades(studentId);
      res.status(201).json({ usersGrades });
  }
  catch (error) {
      console.error("Error adding grade to user:", error);
      res.status(500).json({ error: "Internal server error." });
  }   
};

export const gradeAverage = async (req: Request, res: Response): Promise<void> => {
  try {
      const studentId: string = req.params.id;
      const usersGradesAverage: number | null = await userGradesAverage(studentId);
      res.status(201).json({ usersGradesAverage });

  }
  catch (error) {
      console.error("Error getting grades for user:", error);
      res.status(500).json({ error: "Internal server error." });
  }   
};