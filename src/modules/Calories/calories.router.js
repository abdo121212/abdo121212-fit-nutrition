import { Router } from "express";
import { isAuthenticated } from "./../../middleware/isAuthenticated.js";
import {
  calculateCalories,
  calculateAge,
  burnRate,
  catogery,
} from "./calories.controller.js";
import { isValid } from "../../middleware/validation.js";
import { burnRateSchema, catogerySchema } from "./calories.validation.js";

const router = Router();

router.post("/calculate", isAuthenticated, calculateCalories);
router.get("/age", isAuthenticated, calculateAge);
router.post("/Burn_rate", isAuthenticated, isValid(burnRateSchema), burnRate);
router.post("/catogery", isAuthenticated, isValid(catogerySchema), catogery);

export default router;
