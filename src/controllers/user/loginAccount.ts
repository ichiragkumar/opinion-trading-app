import { Request, Response } from "express";
import { generateJwtToken } from "../../config/generateJWT-token";
import UserSchema from "../../models/user.model";
import { loginToYourAccountSchema } from "../../zod/user";
import * as bcrypt from "bcrypt";


export const loginUseraccount = async (req: Request, res: Response):Promise<any> => {
    const payload = req.body;
    const userData = loginToYourAccountSchema.safeParse(payload);

    if (!userData.success) {
        return res.status(400).json({
            success: false,
            message: "Bad request - Invalid payload",
        });
    }

    try {

        const {email , password } = userData.data;
        const isUserExist = await UserSchema.findOne({ email: email });
        if (!isUserExist) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        const isPasswordCorrect = await bcrypt.compare(password, isUserExist.password);
        if (!isPasswordCorrect) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials",
            });
        }


        const token = generateJwtToken(
            isUserExist._id.toString(),
            isUserExist.email,
        );

        return res.status(200).json({
            success: true,
            message: "Login successful",
            token,
        });
    } catch (error) {
        console.error("Error in loginUseraccount:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error: loginUseraccount",
        });
    }
};
