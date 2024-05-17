import Joi from "joi";

export const createFoodSchema = Joi.object({
  name_ar: Joi.string(),
  name_en: Joi.string(),
  article_summary_en: Joi.string(),
  article_summary_ar: Joi.string(),
  image: Joi.string(),
  protein: Joi.string(),
  calories: Joi.string(),
  nutritional_benefits: Joi.string(),
  category: Joi.string()
  .valid(
    "breakfast",
    "lunch",
    "dinner",
    "light-dinner",
    "light-breakfast",
    "snack"
  ),
});
