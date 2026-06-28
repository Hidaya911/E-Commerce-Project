import express from "express";
import dotenv from "dotenv";

import userRouter from "./routes/users.routes";
import categoryRouter from "./routes/category.routes";
import productRouter from "./routes/products.routes";
import orderRouter from "./routes/orders.routes";
import orderItemRouter from "./routes/orderItems.routes";

import { errorHandler } from "./middlewares/error.middleware";

dotenv.config();

const app = express();
 
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/category", categoryRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);
app.use("/api/order_items", orderItemRouter);

app.use((req, res) => {
    res.status(404).json({
        message: `Route ${req.originalUrl} not found`
    });
});

app.use(errorHandler); export default app;