import express, { Router } from 'express';
import { login, grades, gradesAverage } from '../controllers/userController.js';


const router: Router = express.Router();

router.route('/login').post(login);
router.route('/grades').get(grades);
router.route('/gradesAverage').get(gradesAverage);


export default router;