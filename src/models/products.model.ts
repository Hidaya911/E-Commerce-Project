import { Schema, model } from "mongoose";

export interface IProduct {
    _id: number;
    name: string;
    price: number;
    category: number;
}

const productSchema = new Schema<IProduct>(
    {
        _id: { type: Number, required: true },
        name: { type: String, required: true },
        price: { type: Number, required: true },
        category: { type: Number, ref: "category", required: true }
    },
    {
        _id: false,
        timestamps: false,
        versionKey: false  
    }
);

export default model<IProduct>("products", productSchema, "products");