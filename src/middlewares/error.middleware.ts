import { Request, Response, NextFunction } from "express";

export const errorHandler = (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.error("❌ Error caught by Central Middleware:", err.message);

    // Handle MongoDB Duplicate Key Error (e.g., trying to use an existing integer _id)
    if (err.code === 11000) {
        res.status(400).json({
            success: false,
            message: "Duplicate key error. This ID or unique field already exists.",
            error: err.keyValue
        });
        return;
    }

    // Handle Mongoose Validation Errors
    if (err.name === "ValidationError") {
        const messages = Object.values(err.errors).map((val: any) => val.message);
        res.status(400).json({
            success: false,
            message: "Database validation failed",
            errors: messages
        });
        return;
    }

    // Handle Mongoose Cast Errors 
    if (err.name === "CastError") {
        res.status(400).json({
            success: false,
            message: `Invalid format for field ${err.path}: ${err.value}`
        });
        return;
    }

    // Default Fallback Server Error
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        success: false,
        message: err.message || "Internal Server Error"
    });
};