import Joi from "joi";

export const changeWeightSchema = Joi.object({
  weight: Joi.number().required(),
});
