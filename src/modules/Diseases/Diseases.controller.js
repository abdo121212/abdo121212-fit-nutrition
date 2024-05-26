import { BreakHeart } from "../../../DB/models/heart.breakfast.js";
import cloudinary from "../../utils/cloud.js";
import { catchError } from "./../../utils/catchError.js";
import { LunchHeart } from "./../../../DB/models/heart.lunch.js";
import { DinnerHeart } from "./../../../DB/models/heart.dinner.js";

export const breakFastHeart = catchError(async (req, res, next) => {
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
    { folder: `/food/heart` }
  );
  const breakFastHeart = await BreakHeart.create({
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
  return res.json({ success: true, breakFast });
});

export const lunchHeart = catchError(async (req, res, next) => {
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
    { folder: `/food/heart` }
  );
  const lunch = await LunchHeart.create({
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
  return res.json({ success: true, lunch });
});

export const dinnerHeart = catchError(async (req, res, next) => {
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
    { folder: `/food/heart` }
  );
  const dinner = await DinnerHeart.create({
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
  return res.json({ success: true, dinner });
});

export const getBreakfast = catchError(async (req, res, next) => {
  const breakfast = await BreakHeart.find();
  return res.status(200).json({ success: true, breakfast });
});

export const allLunch = catchError(async (req, res, next) => {
  const lunch = await LunchHeart.find();
  return res.status(200).json({ success: true, lunch });
});

export const allDinner = catchError(async (req, res, next) => {
  const dinner = await DinnerHeart.find();
  return res.status(200).json({ success: true, dinner });
});

export const deleteFood = catchError(async (req, res, next) => {
  const food = await BreakHeart.findById(req.params.foodId);
  if (!food) return next(new Error("Food not found"));

  await BreakHeart.findByIdAndDelete(req.params.foodId);
  return res.json({ success: true, message: "Food deleted successfully" });
});
