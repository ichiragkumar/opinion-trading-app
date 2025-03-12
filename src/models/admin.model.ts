


import mongoose from "mongoose";
import { ADMIN_TYPE } from "../config/constant";

export interface Admin {
    name: string;
    adminType: ADMIN_TYPE;
    isActive: boolean;
    email: string;
    password: string;
    joinedAt: number;   
    
}


const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    adminType: {
        type: ADMIN_TYPE,
        values: Object.values(ADMIN_TYPE),
        default: "ADMIN",
    },
    isActive: {
        type: Boolean,
        default: true,
    },

    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },

    joinedAt: {
        type: Number,
        required: true,
    },


}, {
timestamps: true,
});



const AdminSchaema = mongoose.model<Admin>("Admin", adminSchema);

export default AdminSchaema;