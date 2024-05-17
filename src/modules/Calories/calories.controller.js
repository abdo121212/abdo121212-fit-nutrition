import { User } from "../../../DB/models/models.user.js";
import { catchError } from "../../utils/catchError.js";

export const calculateCalories = catchError(async (req, res, next) => {
  const { weight, height, gender, activityLevel, trainingPriority, finalAge } =
    req.user;
  let BMR;
  if (gender === "male") {
    BMR = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * finalAge;
    if (activityLevel == "low") {
      BMR = BMR * 1.2;
    }
    if (activityLevel == "high") {
      BMR = BMR * 1.375;
    }
    if (activityLevel == "middle") {
      BMR = BMR * 1.725;
    }
  } else {
    BMR = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * finalAge;
    if (activityLevel == "low") {
      BMR = BMR * 1.2;
    }
    if (activityLevel == "high") {
      BMR = BMR * 1.375;
    }
    if (activityLevel == "middle") {
      BMR = BMR * 1.725;
    }
  }
  console.log(req.user.finalAge);
  res.json({ sccess: true, BMR });
});

export const calculateAge = catchError(async (req, res, next) => {
  console.log(req.user.finalAge);
  res.json({ sccess: true, finalAge: req.user.finalAge });
});

export const burnRate = catchError(async (req, res, next) => {
  const { trainingPriority, activityLevel } = req.body;

  const user = await User.findOneAndUpdate(
    req.user,
    {
      trainingPriority,
      activityLevel,
    },
    { new: true }
  );
  if (!user) return next(new Error("User Not Found"));

  return res.json({ sccess: true, user });
});

export const catogery = catchError(async (req, res, next) => {
  const { objectives } = req.body;
  const user = await User.findOneAndUpdate(
    req.user,
    {
      objectives,
    },
    { new: true }
  );
  if (!user) return next(new Error("User Not Found"));

  return res.json({ sccess: true, user });
});
