import { Router } from "express";
import { isAuthenticated } from "../../middleware/isAuthenticated.js";
import { isAuthroizted } from "./../../middleware/isAuthroizted.js";
import { fileUploader, fliterObject } from "../../utils/fileUploader.js";
import { isValid } from "../../middleware/validation.js";
import { createFoodSchema, gitFoodByIdSchema } from "./food.validation.js";
import {
  createFood,
  allFood,
  deleteFood,
  getFoodById,
} from "./food.controller.js";

const router = Router();

// create food
router.post(
  "/createFood",
  isAuthenticated,
  isAuthroizted("user"),
  isValid(createFoodSchema),
  fileUploader(fliterObject.image).single("food"),
  createFood
);

router.delete("/:foodId", deleteFood);

router.get("/:foodId", isValid(gitFoodByIdSchema), getFoodById);

router.get("/allFood", isAuthenticated, allFood);

export default router;
