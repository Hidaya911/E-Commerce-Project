import { Router } from "express";
import {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
} from "../controllers/users.controller";
import { validate } from "../middlewares/validate.middleware";
import { createUserSchema } from "../validators/users.validator";
const router = Router();

router.post("/", validate(createUserSchema), createUser);
router.get("/", getUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
