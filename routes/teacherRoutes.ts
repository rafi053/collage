import express, { Router } from 'express';
import { login, addGrade, removeGrade, editGrade, users, userGrades, usersGradeAverage, deleteUser } from '../controllers/teacherController.js';


const router: Router = express.Router();

router.route('/login/:id').post(login);
router.route('/addGrade/:id').put(addGrade);
router.route('/removeGrade/:id').delete(removeGrade);
router.route('/editGrade/:id').put(editGrade);
router.route('/users').get(users);
router.route('/usersGrades/:id').get(userGrades);
router.route('/usersGradesAverage/:id').get(usersGradeAverage);
router.route('/deleteUser/:id').delete(deleteUser);




export default router;