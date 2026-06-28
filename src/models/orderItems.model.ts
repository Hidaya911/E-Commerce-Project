import { Schema, model } from "mongoose";

export interface IOrderItem {
    _id: number;
    order: number;   
    product: number; 
    quantity: number;
}

const orderItemSchema = new Schema<IOrderItem>(
    {
        _id: { type: Number, required: true },
        // Both foreign key references updated to match their integer primary keys
        order: { type: Number, ref: "Order", required: true },
        product: { type: Number, ref: "Product", required: true },
        quantity: { type: Number, required: true, min: 1 }
    },
    { 
        _id: false, 
        timestamps: false,
        versionKey: false   
    }
);

export default model<IOrderItem>("order_items",orderItemSchema,"order_items"  );
