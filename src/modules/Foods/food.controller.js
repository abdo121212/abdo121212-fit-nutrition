import { Food } from "../../../DB/models/models.food.js";
import { catchError } from "../../utils/catchError.js";
import cloudinary from "../../utils/cloud.js";
import { BreakFast } from "./../../../DB/models/models.breakfast.js";
import { Lunch } from "./../../../DB/models/models.lunch.js";
import { Dinner } from "./../../../DB/models/models.dinner.js";
import { Snacks } from "./../../../DB/models/models.snacks.js";

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

export const getFoodById = catchError(async (req, res, next) => {
  const food = await Food.findById(req.params.foodId);
  if (!food) return next(new Error("Food Not Found !"));
  return res.json({ success: true, food });
});

export const breakfast = catchError(async (req, res, next) => {
  const {
    name_ar,
    name_en,
    article_summary_ar,
    article_summary_en,
    calories,
    fats,
    carbs,
    proteins,
  } = req.body;

  if (!req.file) return next(new Error("Image IS Required"));
  const { secure_url, public_id } = await cloudinary.uploader.upload(
    req.file.path,
    { folder: `/food` }
  );
  const breakfast = await BreakFast.create({
    name_ar,
    name_en,
    image: { url: secure_url, id: public_id },
    article_summary_ar,
    article_summary_en,
    calories,
    fats,
    carbs,
    proteins,
  });
  return res.json({ success: true, breakfast });
});

export const lunch = catchError(async (req, res, next) => {
  const {
    name_ar,
    name_en,
    article_summary_ar,
    article_summary_en,
    calories,
    fats,
    carbs,
    proteins,
  } = req.body;

  if (!req.file) return next(new Error("Image IS Required"));
  const { secure_url, public_id } = await cloudinary.uploader.upload(
    req.file.path,
    { folder: `/food/lunch` }
  );
  const lunch = await Lunch.create({
    name_ar,
    name_en,
    image: { url: secure_url, id: public_id },
    article_summary_ar,
    article_summary_en,
    calories,
    fats,
    carbs,
    proteins,
  });
  return res.json({ success: true, lunch : Giga });
});

export const dinner = catchError(async (req, res, next) => {
  const {
    name_ar,
    name_en,
    article_summary_ar,
    article_summary_en,
    calories,
    fats,
    carbs,
    proteins,
  } = req.body;

  if (!req.file) return next(new Error("Image IS Required"));
  const { secure_url, public_id } = await cloudinary.uploader.upload(
    req.file.path,
    { folder: `/food/dinner` }
  );
  const dinner = await Dinner.create({
    name_ar,
    name_en,
    image: { url: secure_url, id: public_id },
    article_summary_ar,
    article_summary_en,
    calories,
    fats,
    carbs,
    proteins,
  });
  return res.json({ success: true, dinner });
});

export const snacks = catchError(async (req, res, next) => {
  const {
    name_ar,
    name_en,
    article_summary_ar,
    article_summary_en,
    calories,
    fats,
    carbs,
    proteins,
  } = req.body;

  if (!req.file) return next(new Error("Image IS Required"));
  const { secure_url, public_id } = await cloudinary.uploader.upload(
    req.file.path,
    { folder: `/food/Snacks` }
  );
  const snacks = await Snacks.create({
    name_ar,
    name_en,
    image: { url: secure_url, id: public_id },
    article_summary_ar,
    article_summary_en,
    calories,
    fats,
    carbs,
    proteins,
  });
  return res.json({ success: true, snacks });
});

export const getBreakfast = catchError(async (req, res, next) => {
  const Breakfast = await BreakFast.find();
  return res.status(200).json({ success: true, Breakfast });
});

export const getlunch = catchError(async (req, res, next) => {
  const lunch = await Lunch.find();
  return res.status(200).json({ success: true, lunch });
});

export const getDinner = catchError(async (req, res, next) => {
  const dinner = await Dinner.find();
  return res.status(200).json({ success: true, dinner });
});



export const getSnacks = catchError(async (req, res, next) => {
  const snacks = await Snacks.find();
  return res.status(200).json({ success: true, snacks });
});
