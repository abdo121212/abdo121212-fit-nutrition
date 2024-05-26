import { BreakSugar } from "../../../DB/models/Sugar.model.js";
import { catchError } from "./../../utils/catchError.js";
import cloudinary from "./../../utils/cloud.js";
import { SugarLunch } from "./../../../DB/models/sugar.lunch.js";
import { SugarDinner } from "../../../DB/models/sugar.dinner.js";
import { DinnerPro } from "./../../../DB/models/dinner.proussrue.js";

export const sugarFastHeart = catchError(async (req, res, next) => {
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
    { folder: `/food/Sugar` }
  );
  const breakFastSugar = await BreakSugar.create({
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
  return res.json({ success: true, breakFastSugar });
});

export const lunchSugar = catchError(async (req, res, next) => {
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
    { folder: `/food/Sugar` }
  );
  const breakFastSugar = await SugarLunch.create({
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
  return res.json({ success: true, breakFastSugar });
});

export const dinnerSugar = catchError(async (req, res, next) => {
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
    { folder: `/food/Sugar` }
  );
  const dinner = await DinnerPro.create({
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

export const allbreakfast = catchError(async (req, res, next) => {
  const breakfast = await BreakSugar.find();
  return res.status(200).json({ success: true, breakfast });
});

export const allLunch = catchError(async (req, res, next) => {
  const Lunch = await BreakSugar.find();
  return res.status(200).json({ success: true, Lunch });
});

export const alldinnerSugar = catchError(async (req, res, next) => {
  const dinner = await SugarDinner.find();
  return res.status(200).json({ success: true, dinner });
});
