import { Food } from "../../../DB/models/models.food.js";
import { catchError } from "../../utils/catchError.js";
import cloudinary from "../../utils/cloud.js";

export const createFood = catchError(async (req, res, next) => {
  const {
    name_ar,
    name_en,
    article_summary_ar,
    article_summary_en,
    calories,
    category,
    fats,
    carbs,
    quantity,
    proteins,
  } = req.body;

  if (!req.file) return next(new Error("Image IS Required"));
  const { secure_url, public_id } = await cloudinary.uploader.upload(
    req.file.path,
    { folder: `/food` }
  );
  const food = await Food.create({
    name_ar,
    name_en,
    image: { url: secure_url, id: public_id },
    article_summary_ar,
    article_summary_en,
    calories,
    category,
    fats,
    carbs,
    quantity,
    proteins,
  });
  return res.json({ success: true, food });
});

export const allFood = catchError(async (req, res, next) => {
  const food = await Food.find();

  return res.status(200).json({ success: true, food });
});

export const deleteFood = catchError(async (req, res, next) => {
  const food = await Food.findById(req.params.foodId);
  if (!food) return next(new Error("Food not found"));

  await Food.findByIdAndDelete(req.params.foodId);
  return res.json({ success: true, message: "Food deleted successfully" });
});
