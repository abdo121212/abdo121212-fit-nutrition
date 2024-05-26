import { Router } from "express";
import { isValid } from "../../middleware/validation.js";
import { fileUploader, fliterObject } from "../../utils/fileUploader.js";
import {
    allDinner,
  allLunch,
  breakFastHeart,
  deleteFood,
  dinnerHeart,
  getBreakfast,
  lunchHeart,
} from "./Diseases.controller.js";
import { createFoodSchema } from "./Diseases.validation.js";

const router = Router();

router.post(
  "/breakFastHeart",
  isValid(createFoodSchema),
  fileUploader(fliterObject.image).single("food"),
  breakFastHeart
);

router.post(
  "/LunchHeart",
  isValid(createFoodSchema),
  fileUploader(fliterObject.image).single("food"),
  lunchHeart
);

router.post(
  "/dinnerHeart",
  isValid(createFoodSchema),
  fileUploader(fliterObject.image).single("food"),
  dinnerHeart
);


router.post(
    "/dinnerHeart",
    isValid(createFoodSchema),
    fileUploader(fliterObject.image).single("food"),
    dinnerHeart
  );
router.get("/getBreakFastHeart", getBreakfast);
router.get("/getlunchHeart", allLunch);
router.get("/getdinnerHeart", allDinner);

router.delete("/:foodId", deleteFood);

export default router;
