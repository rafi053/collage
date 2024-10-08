import express, { Router } from 'express';
import { login, addGrade, removeGrade, editGrade, users, usersGrades, usersGradesAverage, deleteUser } from '../controllers/teacherController.js';


const router: Router = express.Router();

router.route('/login').post(login);
router.route('/addGrade').put(addGrade);
router.route('/removeGrade').delete(removeGrade);
router.route('/editGrade').put(editGrade);
router.route('/users').get(users);
router.route('/usersGrades').get(usersGrades);
router.route('/usersGradesAverage').get(usersGradesAverage);
router.route('/deleteUser').delete(deleteUser);




export default router;