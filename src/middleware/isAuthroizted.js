import { catchError } from "../utils/catchError.js";

export const isAuthroizted = (role) => {
  return catchError(async (req, res, next) => {
    if (role !== req.user.role)
      return next(new Error("You are not authorized !"));
    return next();
  });
};
