import Router from "express";
import { isValid } from "../../middleware/validation.js";
import {
  registerSchema,
  loginSchema,
  activateSchema,
  forgetPassSchema,
  nextInfoSchema,
  newPasswordSchema,
  OTPCodeSchema,
} from "./auth.vaildation.js";
import {
  activateAccount,
  login,
  nextInfo,
  register,
  sendForgetCode,
  resetPassword,
  deleteUser,
  OTPCode,
  getUser
} from "./auth.controller.js";
import { isAuthenticated } from "../../middleware/isAuthenticated.js";
const router = Router();

// register
router.post("/register", isValid(registerSchema), register);
// next Info
router.post("/nextInfo", isAuthenticated, isValid(nextInfoSchema), nextInfo);
// login
router.post("/login", isValid(loginSchema), login);
// confirmEmail
router.post("/confirmEmail", isValid(activateSchema), activateAccount);

// forget pass
router.patch("/forgetPass", isValid(forgetPassSchema), sendForgetCode);

router.patch("/OTPCode", isValid(OTPCodeSchema), OTPCode);
router.patch(
  "/resstPassword/:email",
  isValid(newPasswordSchema),
  resetPassword
);
router.delete("/deleteUser", deleteUser);

router.get('/',isAuthenticated,getUser);
export default router;
