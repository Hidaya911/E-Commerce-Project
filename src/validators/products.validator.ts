import { z } from "zod";

export const createProductSchema = z.object({
    _id: z.number({ message: "Product ID number is required" }).int().positive(),
    name: z.string({ message: "Product name is required" }).trim().min(1, "Product name cannot be empty"),
    price: z.number({ message: "Price is required" }).min(0, "Price must be 0 or greater"),
    category: z.number({ message: "Category reference ID is required" }).int().positive()
});

export const updateProductSchema = z.object({
    name: z.string().trim().min(1, "Product name cannot be empty").optional(),
    price: z.number().min(0).optional(),
    category: z.number().int().positive().optional()
});