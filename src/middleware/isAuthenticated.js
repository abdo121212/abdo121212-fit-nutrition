import { Token } from "./../../DB/models/models.token.js";
import { catchError } from "./../utils/catchError.js";
import jwt from "jsonwebtoken";
import { User } from "./../../DB/models/models.user.js";

export const isAuthenticated = catchError(async (req, res, next) => {
  // >>> data
  let token = req.headers["token"];
  // check > data
  if (!token) return next(new Error("Token Is required"));
  // check > BEARER_KEY

  // check Token in DB
  const tokenDB = await Token.findOne({ token, isValid: true });
  if (!tokenDB) return next(new Error("Token expired"));
  // decode Token
  const deCdoed = jwt.verify(token, process.env.TOKEN_KEY);

  // check email after decoding
  const user = await User.findOne({ email: deCdoed.email });
  if (!user) return next(new Error("user not found"));
  req.user = user;
  return next();
});