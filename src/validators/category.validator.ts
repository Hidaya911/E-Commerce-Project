import { z } from "zod";

export const createCategorySchema = z.object({
    _id: z.number({ message: "Category ID number is required" }).int().positive(),
    name: z.string({ message: "Category name is required" }).trim().min(1, "Category name cannot be empty")
});

export const updateCategorySchema = z.object({
    name: z.string().trim().min(1, "Category name cannot be empty").optional()
});