

import mongoose from "mongoose";
import { EVENT_TYPE } from "../config/constant";

export interface Event {
    title: string;
    description: string;
    eventType: string;
    isActive: boolean;
    postedOn: number;
    addedByAdminId: mongoose.Types.ObjectId;    
}

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },

    eventType: {
        type: String,
        values : Object.values(EVENT_TYPE),
        default : "NEWS",
    },

    isActive: {
        type: Boolean,
        default:true,
    },

    postedOn: {
        type: Number,
        default: Date.now,
    },
    addedByAdminId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Admin",
    },


}); 


const EventSchaema = mongoose.model<Event>("Event", eventSchema);

export default EventSchaema;