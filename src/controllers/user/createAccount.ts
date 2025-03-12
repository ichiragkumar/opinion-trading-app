
import  {Request, Response} from "express";
import {  userZODSchema } from "../../zod/user";
import UserSchaema from "../../models/user.model";
import { generateRefferalCode } from "../../config/refferalCode";
import * as bcrypt from "bcrypt";

export const createUseraccount =async (req : Request, res : Response) => {
        const payload = req.body;
        const userData =  userZODSchema.safeParse(payload);
        if(!userData.success){
            return res.status(400).json({
                message: userData.error.errors[0].message,
            });
        }

        try{

            const refferalCode = generateRefferalCode();
            const isUserdDocumentAlreadyExist = await UserSchaema.findOne({email:payload.email , refferalCode});
            if(isUserdDocumentAlreadyExist){
                return res.status(409).json({
                    success: false,
                    message: "Conflict - Resource already exists",
                });
            }

            const hashedPassword = await bcrypt.hash(payload.password, 10);
            await UserSchaema.create(
                {
                    name: payload.name,
                    email: payload.email,
                    password: hashedPassword,
                    refferalCode: refferalCode,
                    joinedAt: payload.joinedAt,
                }
            );
            return res.status(201).json({
                success: true,
                message: "User created successfully",
            });

        }catch(error){
            return res.status(500).json({
                success: false,
                message: "Internal server error : createUseraccount",
            });
        }      
    
}