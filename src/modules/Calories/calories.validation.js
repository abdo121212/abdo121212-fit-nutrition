import Joi from "joi";

export const burnRateSchema = Joi.object({
  activityLevel: Joi.string().required().valid("low", "middle", "high"),
  trainingPriority: Joi.string().required().valid("low", "middle", "high"),
}).required();

export const catogerySchema = Joi.object({
  objectives: Joi.string()
    .required()
    .valid("Fitness", "Strength", "Bullking", "Diet"),
}).required();
