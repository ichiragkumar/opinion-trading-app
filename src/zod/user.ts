import { z } from "zod";


export const userZODSchema = z.object({
    name: z.string().min(3).max(50).optional(),
    email: z.string().email().min(3).max(50).optional(),
    password: z.string().min(3).max(50).optional(),
}); 


export const loginToYourAccountSchema = z.object({
    email: z.string().email().min(3).max(50).optional(),
    password: z.string().min(3).max(50).optional(),
});
export type InferUsercreateAccountSchema = z.infer<typeof userZODSchema>;
