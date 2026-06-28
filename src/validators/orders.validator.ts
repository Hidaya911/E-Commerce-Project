import { z } from "zod";

export const createOrderSchema = z.object({
  
        _id: z.number({ message: "Order ID number is required" }).int().positive(),
        totalPrice: z.number().min(0).default(0),
        user: z.number({ message: "User reference ID number is required" }).int().positive()
   
});

export const updateOrderSchema = z.object({

        totalPrice: z.number().min(0).optional(),
        user: z.number().int().positive().optional()
  
});