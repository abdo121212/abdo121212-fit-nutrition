import Joi from "joi";

export const changeNameSchema = Joi.object({
  fullName: Joi.string(),
});

export const changeAgeSchema = Joi.object({
  birthdays: Joi.string(),
});

export const changeHeightSchema = Joi.object({
  height: Joi.number(),
});

export const changeWeightSchema = Joi.object({
  weight: Joi.number(),
});

// export const changePhotoSchema = Joi.object({
//   email: Joi.email(),
// });
