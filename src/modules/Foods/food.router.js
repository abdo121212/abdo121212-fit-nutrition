import { Router } from "express";
import { isAuthenticated } from "../../middleware/isAuthenticated.js";
import { isAuthroizted } from "./../../middleware/isAuthroizted.js";
import { fileUploader, fliterObject } from "../../utils/fileUploader.js";
import { isValid } from "../../middleware/validation.js";
import { createFoodSchema } from "./food.validation.js";
import { createFood, allFood } from "./food.controller.js";

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

router.get("/allFood", allFood);

export default router;
