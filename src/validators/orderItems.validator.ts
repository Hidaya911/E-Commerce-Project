import { z } from "zod";

export const createOrderItemSchema = z.object({
   
        _id: z.number({ message: "OrderItem ID number is required" }).int().positive(),
        order: z.number({ message: "Order reference ID number is required" }).int().positive(),
        product: z.number({ message: "Product reference ID number is required" }).int().positive(),
        quantity: z.number({ message: "Quantity is required" }).int().min(1, "Quantity must be at least 1")

});

export const updateOrderItemSchema = z.object({
 
        order: z.number().int().positive().optional(),
        product: z.number().int().positive().optional(),
        quantity: z.number().int().min(1).optional()
   
});