import { Router } from "express";
import { createFoodSchema } from "./sugar.validation.js";
import { fileUploader, fliterObject } from "./../../utils/fileUploader.js";
import {
  allbreakfast,
  sugarFastHeart,
  lunchSugar,
  allLunch,
  dinnerSugar,
  alldinnerSugar,
} from "./sugar.controller.js";
import { isValid } from "../../middleware/validation.js";

const router = Router();

router.post(
  "/breakFastSugar",
  isValid(createFoodSchema),
  fileUploader(fliterObject.image).single("food"),
  sugarFastHeart
);

router.post(
  "/lunchSugar",
  isValid(createFoodSchema),
  fileUploader(fliterObject.image).single("food"),
  lunchSugar
);

router.post(
  "/dinnerSugar",
  isValid(createFoodSchema),
  fileUploader(fliterObject.image).single("food"),
  dinnerSugar
);

router.get("/allbreakFastSugar", allbreakfast);

router.get("/allLunchSugar", allLunch);

router.get("/alldinnerSugar", alldinnerSugar);
export default router;
