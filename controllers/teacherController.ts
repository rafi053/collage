// import e, { Request, Response, NextFunction } from 'express';

// export const login = async (req: Request, res: Response): Promise<void> => {
//     try {
//         const { passportId, password } = req.body;
//         if (!passportId || !password) {
//             res.status(400).json({ error: "Username and password are required." });
//             return;
//         }    
//         const user = await authenticateTeacher(passportId, password);
//         if (!user) {
//             res.status(401).json({ error: "Invalid username or password." });
//             return;
//         }
//         const token = jwt.sign({ id: user.passportId }, JWT_SECRET);
//         res.status(200).json({ token });
//     }       
//     catch (error) {
//         console.error("Error logging in user:", error);
//         res.status(500).json({ error: "Internal server error." });
//     }
// };

// export const addGrade = async (req: Request, res: Response): Promise<void> => {
//     try {
//         const { studentId, grade } = req.body;
//         if (!studentId || !grade) {
//             res.status(400).json({ error: "Student ID and grade are required." });
//             return;
//         }
//         const user = await addTeacherGrade(studentId, grade);
//         if (!user) {
//             res.status(404).json({ error: "User not found." });
//             return;
//         }
//         res.status(200).json({ user });
//     }
//     catch (error) {
//         console.error("Error adding grade to user:", error);
//         res.status(500).json({ error: "Internal server error." });
//     }   
// };

// export const removeGrade = async (req: Request, res: Response): Promise<void> => {
//     try {
//         const { studentId } = req.body;
//         if (!studentId) {
//             res.status(400).json({ error: "Student ID is required." });
//             return;
//         }
//         const user = await getTeacherGrades(studentId);
//         if (!user) {
//             res.status(404).json({ error: "User not found." });
//             return;
//         }
//         res.status(200).json({ user });
//     }
//     catch (error) {
//         console.error("Error getting grades for user:", error);
//         res.status(500).json({ error: "Internal server error." });
//     }   
// };

// export const editGrade = async (req: Request, res: Response): Promise<void> => {
//     try {
//         const { teacherId } = req.body;
//         if (!teacherId) {
//             res.status(400).json({ error: "Teacher ID is required." });
//             return;
//         }
//         const user = await getTeacherStudents(teacherId);
//         if (!user) {
//             res.status(404).json({ error: "User not found." });
//             return;
//         }
//         res.status(200).json({ user });
//     }
//     catch (error) {
//         console.error("Error getting students for user:", error);
//         res.status(500).json({ error: "Internal server error." });
//     }   
// };


// export const users = async (req: Request, res: Response): Promise<void> => {
//     try {
//         const { passportId, password } = req.body;
//         if (!passportId || !password) {
//             res.status(400).json({ error: "Username and password are required." });
//             return;
//         }    
//         const user = await authenticateTeacher(passportId, password);
//         if (!user) {
//             res.status(401).json({ error: "Invalid username or password." });
//             return;
//         }
//         const token = jwt.sign({ id: user.passportId }, JWT_SECRET);
//         res.status(200).json({ token });
//     }       
//     catch (error) {
//         console.error("Error logging in user:", error);
//         res.status(500).json({ error: "Internal server error." });
//     }
// };

// export const usersGrades = async (req: Request, res: Response): Promise<void> => {
//     try {
//         const { studentId, grade } = req.body;
//         if (!studentId || !grade) {
//             res.status(400).json({ error: "Student ID and grade are required." });
//             return;
//         }
//         const user = await addTeacherGrade(studentId, grade);
//         if (!user) {
//             res.status(404).json({ error: "User not found." });
//             return;
//         }
//         res.status(200).json({ user });
//     }
//     catch (error) {
//         console.error("Error adding grade to user:", error);
//         res.status(500).json({ error: "Internal server error." });
//     }   
// };

// export const usersGradesAverage = async (req: Request, res: Response): Promise<void> => {
//     try {
//         const { studentId } = req.body;
//         if (!studentId) {
//             res.status(400).json({ error: "Student ID is required." });
//             return;
//         }
//         const user = await getTeacherGrades(studentId);
//         if (!user) {
//             res.status(404).json({ error: "User not found." });
//             return;
//         }
//         res.status(200).json({ user });
//     }
//     catch (error) {
//         console.error("Error getting grades for user:", error);
//         res.status(500).json({ error: "Internal server error." });
//     }   
// };

// export const deleteUser = async (req: Request, res: Response): Promise<void> => {
//     try {
//         const { teacherId } = req.body;
//         if (!teacherId) {
//             res.status(400).json({ error: "Teacher ID is required." });
//             return;
//         }
//         const user = await getTeacherStudents(teacherId);
//         if (!user) {
//             res.status(404).json({ error: "User not found." });
//             return;
//         }
//         res.status(200).json({ user });
//     }
//     catch (error) {
//         console.error("Error getting students for user:", error);
//         res.status(500).json({ error: "Internal server error." });
//     }   
// };



