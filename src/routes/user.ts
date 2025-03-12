import express from 'express';
import { createUseraccount } from '../controllers/user/createAccount';
import { loginUseraccount } from '../controllers/user/loginAccount';

const userRouter = express.Router();

userRouter.post('/create', createUseraccount);
userRouter.post('/login', loginUseraccount);

export default userRouter;
