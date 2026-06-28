import { Router } from "express";
import {
    createOrderItem,
    getOrderItems,
   getOrderItemById,
   updateOrderItem,
 deleteOrderItem

} from "../controllers/orderItems.controller";
import { validate } from "../middlewares/validate.middleware";
import { createOrderItemSchema } from "../validators/orderItems.validator";
const router = Router();

router.post("/", validate(createOrderItemSchema),  createOrderItem);
router.get("/", getOrderItems);
router.get("/:id",getOrderItemById);
router.put("/:id", updateOrderItem);
router.delete("/:id",  deleteOrderItem);

export default router;
