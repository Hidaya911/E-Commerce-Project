import { Schema, model } from "mongoose";

export interface IUser {
    _id: number;
    name: string;
    email: string;
}

const userSchema = new Schema<IUser>(
    {
        _id: { type: Number, required: true },
        name: { type: String, required: true, trim: true },
        email: { type: String, required: true, unique: true, lowercase: true }
    },
    { 
        _id: false, 
        timestamps: false,
        versionKey: false   
    }
);

export default model<IUser>("users", userSchema, "users");