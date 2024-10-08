import { Grades, User } from "../models/userModel.js";
import { get,  findUser, dleate, getAll, edit } from "../DAL/data.js";

export const teacherLogin = async (fullName: string, password: string): Promise<User> => {
    const user: any = await get(fullName, password);  
    return user;
  };


  export const TeacherAddGrade = async (studentId: string, grade:number): Promise<Grades[] | undefined> => {
    const user: User = await findUser(studentId);  
    const grades: Grades[] | undefined = user.grades
    return grades;
  };


  export const removeTeacherGrade = async (studentId: string, grade:number): Promise<Grades[] | undefined> => {
    const user: User = await findUser(studentId);  
    const grades: Grades[] | undefined = user.grades
    return grades;
  };


  export const editTeacherGrade = async (studentId: string, grade:number): Promise<Grades[] | undefined> => {
    const user: User = await findUser(studentId);  
    const grades: Grades[] | undefined = user.grades
    return grades;
  };


  export const teacherGetUsers = async (): Promise<User[]> => {
    const users: User[] = await getAll();  
    return users;
  };


  export const teacherGetUsersGrades = async (): Promise<number> => {
    const grades: Grades[] = await findUser(id);
    const gradesAverage: number = grades.reduce((a,b) => a + b.grade,0)/grades.length;  
    return gradesAverage;
  };



  export const teacherGetusersGradesAverage = async (): Promise<User> => {
    const user: any = await get(fullName, password);  
    return user;
  };


  export const teacherdeleteUser = async (id: string): Promise<Grades[]> => {
    const grades: Grades[] = await findUser(id);  
    return grades;
  };


  