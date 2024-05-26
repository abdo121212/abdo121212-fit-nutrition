import { Router } from "express";
import { isValid } from "../../middleware/validation.js";
import { fileUploader, fliterObject } from "../../utils/fileUploader.js";
import { allDinner, allLunch, dinnerPressure, getBreakfast, lunchPressure, pressureBreak } from "./Pressure.controller.js";
import { createFoodSchema } from "./Pressure.validation.js";

const router = Router();

router.post(
  "/breakFastPressure",
  isValid(createFoodSchema),
  fileUploader(fliterObject.image).single("food"),
  pressureBreak
);

router.post(
  "/LunchPressure",
  isValid(createFoodSchema),
  fileUploader(fliterObject.image).single("food"),
  lunchPressure
);

router.post(
  "/dinnerPressure",
  isValid(createFoodSchema),
  fileUploader(fliterObject.image).single("food"),
  dinnerPressure
);


router.get("/getBreakFastPressure", getBreakfast);
router.get("/getlunchPressure", allLunch);
router.get("/getdinnerPressure", allDinner);

export default router;
