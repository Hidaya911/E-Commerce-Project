import { Request, Response, NextFunction } from "express";
import OrderItem from "../models/orderItems.model";


//insert a new order item
export const createOrderItem = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const orderItem = await OrderItem.create(req.body);
        res.status(201).json(orderItem);
    } catch (error) { next(error); }
};

//get order item with pagination
export const getOrderItems = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;
        const skip = (page - 1) * limit;

        const orderItems = await OrderItem.find()
            .populate("order")
            .populate("product")
            .skip(skip)
            .limit(limit);
            
        const totalItems = await OrderItem.countDocuments();

        res.json({
            data: orderItems,
            pagination: { currentPage: page, limit, totalPages: Math.ceil(totalItems / limit), totalItems }
        });
    } catch (error) { next(error); }
};

//order item by id
export const getOrderItemById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const orderItem = await OrderItem.findById(req.params.id).populate("order").populate("product");
        if (!orderItem) { res.status(404).json({ message: "Item row variant not found" }); return; }
        res.json(orderItem);
    } catch (error) { next(error); }
};

//update an orderitem
export const updateOrderItem = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const orderItem = await OrderItem.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!orderItem) { res.status(404).json({ message: "Item row variant not found" }); return; }
        res.json(orderItem);
    } catch (error) { next(error); }
};

//delete order item
export const deleteOrderItem = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const orderItem = await OrderItem.findByIdAndDelete(req.params.id);
        if (!orderItem) { res.status(404).json({ message: "Item row variant not found" }); return; }
        res.status(204).send();
    } catch (error) { next(error); }
};