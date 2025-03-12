import express from "express";


const userRouter = express.Router();



userRouter.post("/create" , createUseraccount)
userRouter.post("/login" , loginUseraccount)



userRouter.patch("/update" , updateUseraccount)

export default userRouter;

