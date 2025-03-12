import { Request, Response } from 'express';
import EventSchema from '../../models/event.model';
import { eventZODSchema } from '../../zod/event';
import mongoose from 'mongoose';

export const updateEvent = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { id } = req.params;
  const payload = req.body;
  const eventData = eventZODSchema.safeParse(payload);

  if (!eventData.success) {
    return res.status(400).json({
      success: false,
      message: 'Bad request - Invalid payload',
      errors: eventData.error.format(),
    });
  }

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid event ID',
      });
    }

    if (!mongoose.Types.ObjectId.isValid(eventData.data.addedByAdminId)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid admin ID',
      });
    }

    const existingEvent = await EventSchema.findOne({ _id: id });
    if (!existingEvent) {
      return res.status(404).json({
        success: false,
        message: 'Event not found',
      });
    }

    const {
      title,
      description,
      eventType,
      isActive,
      addedByAdminId,
      postedOn,
    } = eventData.data;

    existingEvent.title = title;
    existingEvent.description = description;
    existingEvent.eventType = eventType;
    existingEvent.isActive = isActive;
    existingEvent.addedByAdminId = new mongoose.Types.ObjectId(addedByAdminId);
    existingEvent.postedOn = postedOn;

    await existingEvent.save();

    return res.status(200).json({
      success: true,
      message: 'Event updated successfully',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal server error: updateEvent',
    });
  }
};
