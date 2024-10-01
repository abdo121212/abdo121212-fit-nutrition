import Joi from "joi";

export const changeUserSchema = Joi.object({
  fullName: Joi.string(),
  birthdays: Joi.date(),
  height: Joi.number(),
  weight: Joi.number(),
  profileImage: Joi.string(),
});
