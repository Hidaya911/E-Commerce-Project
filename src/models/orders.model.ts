import { Schema, model } from "mongoose";

export interface IOrder {
    _id: number;
    orderDate: Date;
    totalPrice: number;
    user: number; // Changed from ObjectId to number because User._id is an integer
}

const orderSchema = new Schema<IOrder>(
    {
        _id: { type: Number, required: true },
        orderDate: { type: Date, default: Date.now },
        totalPrice: { type: Number, required: true, default: 0 },
        // Reference type must match the target's _id data type (Number)
        user: { type: Number, ref: "User", required: true }
    },
    { 
        _id: false, 
        timestamps: false,
        versionKey: false   
    }
);

export default model<IOrder>("orders", orderSchema, "orders");