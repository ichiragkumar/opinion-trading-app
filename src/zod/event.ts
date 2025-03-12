import { z } from "zod";
import { EVENT_TYPE } from "../config/constant";

export const eventZODSchema = z.object({
    title: z.string().min(3).max(100),
    description: z.string().min(3).max(500),
    date: z.date(),
    eventType: z.enum(Object.values(EVENT_TYPE) as [string, ...string[]]),
    isActive: z.boolean().default(true),
    addedByAdminId: z.string().min(24).max(24),
    postedOn: z.number()
});

export type InferEventCreateSchema = z.infer<typeof eventZODSchema>;
