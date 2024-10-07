import { Grades, User } from "../models/userModel.js";
import { get, find } from "../DAL/data.js";

export const userLogin = async (fullName: string, password: string): Promise<User> => {
    const user: any = await get(fullName, password);  
    return user;
  };


  export const userGrades = async (id: string): Promise<Grades[]> => {
    const grades: Grades[] = await find(id);  
    return grades;
  };


  export const userGradesAverage = async (id: string): Promise<number> => {
    const grades: Grades[] = await find(id);
    const gradesAverage: number = grades.reduce((a,b) => a + b.grade,0)/grades.length;  
    return gradesAverage;
  };

 