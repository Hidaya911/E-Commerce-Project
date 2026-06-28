import { z } from "zod";

export const createUserSchema = z.object({
   
        _id: z.number({ message: "User ID number is required" }).int().positive(),
        name: z.string({ message: "Name is required" }).trim().min(1, "Name cannot be empty"),
        email: z.string({ message: "Email is required" }).email("Invalid email format")
   
});

export const updateUserSchema = z.object({
 
        name: z.string().trim().min(1, "Name cannot be empty").optional(),
        email: z.string().email("Invalid email format").optional()

});