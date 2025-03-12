import { Request, Response } from "express";
import EventSchema from "../../models/event.model";
import { eventZODSchema } from "../../zod/event";
import mongoose from "mongoose";


export const createEvent = async (req: Request, res: Response): Promise<string | any> => {
    const payload = req.body;
    const eventData = eventZODSchema.safeParse(payload);

    if (!eventData.success) {
        return res.status(400).json({
            success: false,
            message: "Bad request - Invalid payload",
            errors: eventData.error.format(),
        });
    }

    try {
        const { title, description, date, eventType, isActive, addedByAdminId, postedOn } = eventData.data;


        if (!mongoose.Types.ObjectId.isValid(addedByAdminId)) {
            return res.status(400).json({
                success: false,
                message: "Invalid admin ID",
            });
        }

        const isDocumenthaveSameTitle = await EventSchema.findOne({ title });
        if (isDocumenthaveSameTitle) {
            return res.status(409).json({
                success: false,
                message: "Conflict - Resource already exists",
            });
        }

        await EventSchema.create({
            title,
            description,
            date,
            eventType,
            isActive,
            addedByAdminId:  new mongoose.Types.ObjectId(addedByAdminId),
            postedOn,
        });

        return res.status(201).json({
            success: true,
            message: "Event created successfully",
        });
    } catch (error) {

        return res.status(500).json({
            success: false,
            message: "Internal server error: createEvent",
        });
    }
};
