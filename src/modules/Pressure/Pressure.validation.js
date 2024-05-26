import Joi from "joi";

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
