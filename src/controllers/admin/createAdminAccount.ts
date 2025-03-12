import { Request, Response } from "express";
import AdminSchema from "../../models/admin.model";
import * as bcrypt from "bcrypt";
import { adminZODSchema } from "../../zod/admin";

export const createAdminAccount = async (req: Request, res: Response): Promise<Response> => {
    const payload  = req.body;

    const adminData = adminZODSchema.safeParse(payload);
    if (!adminData.success) {   
        return res.status(400).json({
            success: false,
            message: "Bad request - Invalid payload",
        });
    }

    try {
        const {email,name, joinedAt ,adminType, password } = adminData.data;

        const existingAdmin = await AdminSchema.findOne({ email });
        if (existingAdmin) {
            return res.status(409).json({
                success: false,
                message: "Admin with this email already exists",
            });
        }


        const hashedPassword = await bcrypt.hash(password, 10);


         await AdminSchema.create({
            name,
            email,
            password: hashedPassword,
            adminType,
            joinedAt, 
        });

        return res.status(201).json({
            success: true,
            message: "Admin created successfully",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error: createAdminAccount",
        });
    }
};
