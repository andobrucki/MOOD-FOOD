import express from 'express';
import { signup } from '../controllers/userController.js';
import { login } from '../controllers/userController.js';
import { logout } from '../controllers/userController.js';

const router = express.Router();

router.route('/signup').post(signup);
router.route('/login').post(login);
router.route('/logout').get(logout);

router.use(protect);
router.route('/me').get(getMe);

export default router;
