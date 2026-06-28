import { Request, Response, NextFunction } from "express";
import Product from "../models/products.model";

// CREATE
export const createProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        next(error);
    }
};

// GET ALL (pagination)
export const getProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;
        const skip = (page - 1) * limit;

        const products = await Product.find().populate("category").skip(skip).limit(limit);
        const totalItems = await Product.countDocuments();

        res.json({
            data: products,
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
export const getProductById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const product = await Product.findById(req.params.id).populate("category");

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.json(product);
    } catch (error) {
        next(error);
    }
};

// UPDATE
export const updateProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        ).populate("category");

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.json(product);
    } catch (error) {
        next(error);
    }
};

// DELETE
export const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(204).send();
    } catch (error) {
        next(error);
    }
};