import express from 'express';
import { test, updateUser, deleteUser, signout, getUserApplications,  getUser, getUsers, getUserBookings, getCustomerBookings  } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/test', test );
router.put('/update/:userId', verifyToken, updateUser);
router.delete('/delete/:userId', verifyToken, deleteUser);
router.post('/signout', signout);
router.get('/applications/:id', verifyToken, getUserApplications)
router.get('/bookings/:id', verifyToken, getUserBookings)
router.get('/custbookings/:id', verifyToken, getCustomerBookings)
router.get ('/getusers', verifyToken, getUsers);
router.get('/:id', verifyToken, getUser)

export default router;