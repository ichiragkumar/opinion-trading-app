import mongoose, { Document, Schema } from 'mongoose';
import { ADMIN_TYPE } from '../config/constant';

export interface Admin extends Document {
  name: string;
  adminType: ADMIN_TYPE;
  isActive: boolean;
  email: string;
  password: string;
  joinedAt: number;
}

const adminSchema = new Schema<Admin>(
  {
    name: {
      type: String,
      required: true,
    },
    adminType: {
      type: String,
      enum: Object.values(ADMIN_TYPE),
      default: ADMIN_TYPE.ADMIN,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    joinedAt: {
      type: Number,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const AdminSchema = mongoose.model<Admin>('Admin', adminSchema);

export default AdminSchema;
