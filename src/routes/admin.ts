import express from 'express';
import { createAdminAccount } from '../controllers/admin/createAdminAccount';
import { loginAdminAccount } from '../controllers/admin/loginAdminaccount';

const adminRouter = express.Router();

adminRouter.post('/create', createAdminAccount);
adminRouter.post('/login', loginAdminAccount);

export default adminRouter;
