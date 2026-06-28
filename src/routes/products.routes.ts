import { Router } from "express";
import {
    createProduct,
    getProducts,
   getProductById,
   updateProduct,
  deleteProduct

} from "../controllers/products.controller";
import { validate } from "../middlewares/validate.middleware";
import { createProductSchema } from "../validators/products.validator";
const router = Router();

router.post("/", validate(createProductSchema),  createProduct);
router.get("/", getProducts);
router.get("/:id",getProductById);
router.put("/:id", updateProduct);
router.delete("/:id",  deleteProduct);

export default router;
