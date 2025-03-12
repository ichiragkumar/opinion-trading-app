import { Request, Response } from 'express';
import EventSchema from '../../models/event.model';
import mongoose from 'mongoose';

export const deleteMultipleEvents = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { ids } = req.body;

  if (!Array.isArray(ids) || ids.length === 0) {
    return res.status(400).json({
      success: false,
      message: 'Invalid request - IDs must be an array and cannot be empty',
    });
  }

  const validIds = ids.filter((id) => mongoose.Types.ObjectId.isValid(id));
  if (validIds.length === 0) {
    return res.status(400).json({
      success: false,
      message: 'No valid IDs provided',
    });
  }

  try {
    const result = await EventSchema.updateMany(
      { _id: { $in: validIds } },
      { $set: { isActive: false } }
    );

    if (result.modifiedCount === 0) {
      return res.status(404).json({
        success: false,
        message: 'No matching events found to delete',
      });
    }

    return res.status(200).json({
      success: true,
      message: `${result.modifiedCount} events deleted successfully (soft delete)`,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal server error: deleteMultipleEvents',
    });
  }
};
