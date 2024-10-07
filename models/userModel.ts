export interface User {
    fullName: string;
    passportId: number;
    password: string;
    grades?: number[];
    role: string;
  }
  
  export interface Grades {
    subject: string;
    grade: number;
  }
  