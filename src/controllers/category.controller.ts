import { Request, Response, NextFunction } from "express";
import Category from "../models/category.model";

// CREATE
export const createCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const category = await Category.create(req.body);
        res.status(201).json(category);
    } catch (error) {
        next(error);
    }
};

// GET ALL (pagination)
export const getCategories = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;
        const skip = (page - 1) * limit;

        const categories = await Category.find().skip(skip).limit(limit);
        const totalItems = await Category.countDocuments();

        res.json({
            data: categories,
            pagination: {
                currentPage: page,
                limit,
                totalPages: Math.ceil(totalItems / limit),
                totalItems
            }
        });
    } catch (error) {
        next(error);
    }
};

// GET BY ID
export const getCategoryById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const category = await Category.findById(req.params.id);

        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }

        res.json(category);
    } catch (error) {
        next(error);
    }
};

// UPDATE
export const updateCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const category = await Category.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }

        res.json(category);
    } catch (error) {
        next(error);
    }
};

// DELETE
export const deleteCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);

        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }

        res.status(204).send();
    } catch (error) {
        next(error);
    }
};