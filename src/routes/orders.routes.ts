import { Router } from "express";
import {
    createOrder,
    getOrders,
   getOrderById,
    updateOrder,
  deleteOrder

} from "../controllers/orders.controller";
import { validate } from "../middlewares/validate.middleware";
import { createOrderSchema } from "../validators/orders.validator";
const router = Router();

router.post("/", validate(createOrderSchema), createOrder);
router.get("/", getOrders);
router.get("/:id",getOrderById);
router.put("/:id", updateOrder);
router.delete("/:id",  deleteOrder);

export default router;
