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
  breakfast,
  lunch,
  dinner,
  snacks,
  getBreakfast,
  getlunch,
  getDinner,
  getSnacks,
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
// router.get("/allFood", allFood);

// router.get("/:foodId", isValid(gitFoodByIdSchema), getFoodById);

// router.post(
//   "/breakfast",
//   isValid(createFoodSchema),
//   fileUploader(fliterObject.image).single("food"),
//   breakfast
// );

router.get("/breakfast", getBreakfast);

router.post(
  "/lunch",
  isValid(createFoodSchema),
  fileUploader(fliterObject.image).single("food"),
  lunch
);

router.post(
  "/snacks",
  isValid(createFoodSchema),
  fileUploader(fliterObject.image).single("food"),
  snacks
);

router.get("/lunch", getlunch);
router.get("/snacks", getSnacks);

router.post(
  "/dinner",
  isValid(createFoodSchema),
  fileUploader(fliterObject.image).single("food"),
  dinner
);

router.get("/dinner", getDinner);
router.post(
  "/snacks",
  isValid(createFoodSchema),
  fileUploader(fliterObject.image).single("food"),
  snacks
);

router.post(
  "/breakfast",
  isValid(createFoodSchema),
  fileUploader(fliterObject.image).single("food"),
  breakfast
);

router.get("/allFood", allFood);

router.get("/:foodId", isValid(gitFoodByIdSchema), getFoodById);

export default router;
