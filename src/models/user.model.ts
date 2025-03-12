



import mongoose from "mongoose";


export interface User {
    name: string;
    email: string;
    refferalCode: string;
    isInvited: boolean;
    password: string;
    joinedAt: number;
    

}

const userSchema = new mongoose.Schema<User>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },

    refferalCode: {
        type: String,
        required: true,
        unique: true,
    },

    isInvited: {
        type: Boolean,
        default: false,
    },
    password: {
        type: String,
        required: true,
    },
    joinedAt: {
        type: Number,
        default: Date.now,
    },
}, {
    timestamps: true,
}); 


const UserSchaema = mongoose.model<User>("User", userSchema);

export default UserSchaema;