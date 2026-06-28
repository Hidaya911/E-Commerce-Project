import { Request, Response, NextFunction } from "express";
import Order from "../models/orders.model";

//insert an order
export const createOrder = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const order = await Order.create(req.body);
        res.status(201).json(order);
    } catch (error) { next(error); }
};

//get orders using pgination
export const getOrders = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;
        const skip = (page - 1) * limit;

        const orders = await Order.find().populate("user").skip(skip).limit(limit);
        const totalItems = await Order.countDocuments();

        res.json({
            data: orders,
            pagination: { currentPage: page, limit, totalPages: Math.ceil(totalItems / limit), totalItems }
        });
    } catch (error) { next(error); }
};

//get order by id
export const getOrderById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const order = await Order.findById(req.params.id).populate("user");
        if (!order) { res.status(404).json({ message: "Order not found" }); return; }
        res.json(order);
    } catch (error) { next(error); }
};

//update an order
export const updateOrder = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!order) { res.status(404).json({ message: "Order not found" }); return; }
        res.json(order);
    } catch (error) { next(error); }
};


//delete an order 
export const deleteOrder = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const order = await Order.findByIdAndDelete(req.params.id);
        if (!order) { res.status(404).json({ message: "Order not found" }); return; }
        res.status(204).send();
    } catch (error) { next(error); }
};