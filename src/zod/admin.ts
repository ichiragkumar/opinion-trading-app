import { z } from "zod";
import { ADMIN_TYPE } from "../config/constant";

export const adminZODSchema = z.object({
    name: z.string().min(3).max(50),
    adminType: z.enum(Object.values(ADMIN_TYPE) as [string, ...string[]]), 
    email: z.string().email().min(3).max(50),
    password: z.string().min(6).max(50), 
    joinedAt: z.date().optional(), 
});

export const loginAdminSchema = z.object({
    email: z.string().email().min(3).max(50),
    password: z.string().min(6).max(50),
});

export type InferAdminCreateAccountSchema = z.infer<typeof adminZODSchema>;
