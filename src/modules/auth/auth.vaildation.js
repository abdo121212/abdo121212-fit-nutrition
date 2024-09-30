import Joi from "joi";

export const registerSchema = Joi.object({
  fullName: Joi.string().min(10).max(30).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  password: Joi.string().required(),
  confirmPassword: Joi.string().valid(Joi.ref("password")).required(),
}).required();

export const nextInfoSchema = Joi.object({
  height: Joi.number().required(),
  weight: Joi.number().required(),
  birthdays: Joi.date().required(),
  gender: Joi.string().required().valid("female", "male"),
  diseases: Joi.string(),
});
export const loginSchema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  password: Joi.string().required(),
}).required();

export const activateSchema = Joi.object({
  activationCode: Joi.number().required(),
}).required();

export const forgetPassSchema = Joi.object({
  email: Joi.string().required(),
}).required();

export const checkOPTSchema = Joi.object({
  forGetCode: Joi.string().required(),
  // email: Joi.string().required(),
  // password: Joi.required(),
  // confirmPassword: Joi.valid(Joi.ref("password")).required(),
}).required();

export const OTPCodeSchema = Joi.object({
  code: Joi.string().min(4).required(),
}).required();

export const newPasswordSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.required(),
  confirmPassword: Joi.valid(Joi.ref("password")).required(),
}).required();
