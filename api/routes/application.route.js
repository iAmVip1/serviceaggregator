import express from 'express';
import { createApplication, deleteApplication, updateApplication, getApplication, getApplications, getAdminApplications } from '../controllers/application.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create', verifyToken, createApplication);
router.delete('/delete/:id', verifyToken, deleteApplication);
router.post('/update/:id', verifyToken, updateApplication);
router.get('/get/:id', getApplication);
router.get('/get', getApplications);
router.get('/getAll', getAdminApplications);
export default router;