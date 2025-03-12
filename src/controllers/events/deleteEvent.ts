import { Request, Response } from 'express';
import EventSchema from '../../models/event.model';
import mongoose from 'mongoose';

export const deleteEvent = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid event ID',
      });
    }

    const existingEvent = await EventSchema.findOne({ _id: id });
    if (!existingEvent) {
      return res.status(404).json({
        success: false,
        message: 'Event not found',
      });
    }

    existingEvent.isActive = false;
    await existingEvent.save();

    return res.status(200).json({
      success: true,
      message: 'Event deleted successfully (soft delete)',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal server error: deleteEvent',
    });
  }
};
