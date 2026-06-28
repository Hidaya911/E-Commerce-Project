import { Schema, model } from "mongoose";

export interface ICategory {
    _id: number;
    name: string;
}

const categorySchema = new Schema<ICategory>(
    {
        _id: { type: Number, required: true },
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true
        }
    },
    {
        _id: false,
        timestamps: false,
        versionKey: false  
    }
);

export default model<ICategory>("category", categorySchema, "category");