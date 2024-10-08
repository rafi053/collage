import { Request, Response, NextFunction } from 'express';
import { teacherLogin, TeacherAddGrade, removeTeacherGrade, editTeacherGrade, teacherGetUsers, teacherGetUsersGrades, teacherGetusersGradesAverage, teacherdeleteUser } from "../services/teacherService";
import { Grades, User } from '../models/userModel.js';


export const login = async (req: Request, res: Response): Promise<void> => {
    try {
      const { fullName, password  } = req.body;
  
      if (!fullName || !password) {
        res.status(400).json({ error: "Username and password are required." });
        return;
      }
  
      const user:User = await teacherLogin(fullName, password);
      if (!user) {
        res.status(401).json({ error: "Invalid username or password." });
        return;
      }
    } catch (error) {
      console.error("Error logging in user:", error);
      res.status(500).json({ error: "Internal server error." });
    }
  };
  

export const addGrade = async (req: Request, res: Response): Promise<void> => {
    try {
        const studentId: string = req.params.id;
        const  grade = req.body;
        if (!grade) {
            res.status(400).json({ error: "Student ID and grade are required." });
            return;
        }
        const user = await TeacherAddGrade(studentId, grade);
        if (!user) {
            res.status(404).json({ error: "User not found." });
            return;
        }
        res.status(200).json({ user });
    }
    catch (error) {
        console.error("Error adding grade to user:", error);
        res.status(500).json({ error: "Internal server error." });
    }   
};

export const removeGrade = async (req: Request, res: Response): Promise<void> => {
    try {
        const studentId: string = req.params.id;
        const user = await removeTeacherGrade(studentId);
        if (!user) {
            res.status(404).json({ error: "User not found." });
            return;
        }
        res.status(200).json({ user });
    }
    catch (error) {
        console.error("Error getting grades for user:", error);
        res.status(500).json({ error: "Internal server error." });
    }   
};

export const editGrade = async (req: Request, res: Response): Promise<void> => {
    try {
        const studentId: string = req.params.id;
        const user = await editTeacherGrade(studentId);
        if (!user) {
            res.status(404).json({ error: "User not found." });
            return;
        }
        res.status(200).json({ user });
    }
    catch (error) {
        console.error("Error getting students for user:", error);
        res.status(500).json({ error: "Internal server error." });
    }   
};


export const users = async (req: Request, res: Response): Promise<void> => {
    try{
        const users: User[] = await teacherGetUsers();
    }
        
    catch (error) {
        console.error("Error logging in user:", error);
        res.status(500).json({ error: "Internal server error." });
    }
};

export const usersGrades = async (req: Request, res: Response): Promise<void> => {
    try {
        const usersGrades:any = await teacherGetUsersGrades();
            
    }
    catch (error) {
        console.error("Error adding grade to user:", error);
        res.status(500).json({ error: "Internal server error." });
    }   
};

export const usersGradesAverage = async (req: Request, res: Response): Promise<void> => {
    try {
        const usersGradesAverage: number = await teacherGetusersGradesAverage();
       
    }
    catch (error) {
        console.error("Error getting grades for user:", error);
        res.status(500).json({ error: "Internal server error." });
    }   
};

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const studentId: string = req.params.id;
        const user = await teacherdeleteUser(studentId);
        if (!user) {
            res.status(404).json({ error: "User not found." });
            return;
        }
        res.status(200).json({ user });
    }
    catch (error) {
        console.error("Error getting students for user:", error);
        res.status(500).json({ error: "Internal server error." });
    }   
};



