import { Router } from "express";
import {
    createCategory,
    getCategories,
    getCategoryById,
    updateCategory,
    deleteCategory

} from "../controllers/category.controller";
import { validate } from "../middlewares/validate.middleware";
import { createCategorySchema } from "../validators/category.validator";
const router = Router();

router.post("/", validate(createCategorySchema), createCategory);
router.get("/", getCategories);
router.get("/:id", getCategoryById);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

export default router;
