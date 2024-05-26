import cloudinary from "../../utils/cloud.js";
import { catchError } from "./../../utils/catchError.js";
import { LunchProssure} from "./../../../DB/models/PressureBreakFasst.model.js";
import { PressureBreakFast } from "../../../DB/models/pressure.breakfast.js";
import { DinnerHeart } from './../../../DB/models/heart.dinner.js';
import { BreakSugar } from './../../../DB/models/Sugar.model.js';

export const pressureBreak = catchError(async (req, res, next) => {
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
    { folder: `/food/Pressure` }
  );
  const breakFast = await PressureBreakFast.create({
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

export const lunchPressure = catchError(async (req, res, next) => {
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
  const lunch = await LunchProssure.create({
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

export const dinnerPressure = catchError(async (req, res, next) => {
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
  const breakFastHeart = await BreakSugar.find();
  return res.status(200).json({ success: true, breakFastHeart });
});

export const allLunch = catchError(async (req, res, next) => {
  const lunch = await LunchProssure.find();
  return res.status(200).json({ success: true, lunch });
});

export const allDinner = catchError(async (req, res, next) => {
  const dinner = await DinnerHeart.find();
  return res.status(200).json({ success: true, dinner });
});
