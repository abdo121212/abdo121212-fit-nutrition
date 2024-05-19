import Joi from "joi";
import { isValidObjectId } from "../../middleware/validation.js";

export const createFoodSchema = Joi.object({
  name_ar: Joi.string(),
  name_en: Joi.string(),
  article_summary_en: Joi.string(),
  article_summary_ar: Joi.string(),
  image: Joi.string(),
  proteins: Joi.number(),
  carbs: Joi.number(),
  fats: Joi.number(),
  quantity: Joi.string(),
  calories: Joi.string(),
  category: Joi.string().valid(
    "breakfast",
    "lunch",
    "dinner",
    "light-dinner",
    "light-breakfast",
    "snack"
  ),
});

export const gitFoodByIdSchema = Joi.object({
  foodId: Joi.string().custom(isValidObjectId).required(),
});
