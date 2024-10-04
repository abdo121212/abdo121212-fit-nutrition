import { Router } from "express";
import { isAuthenticated } from "./../../middleware/isAuthenticated.js";
import { isValid } from "../../middleware/validation.js";
import { changeUserSchema } from "./changeUser.validation.js";
import { changeUser } from "./changeUser.controller.js";
import { fileUploader, fliterObject } from "../../utils/fileUploader.js";

const router = Router();

router.patch(
  "/user",
  isAuthenticated,
  fileUploader(fliterObject.image).single("profileImage"),
  changeUser
);

// router.patch("/age", isAuthenticated,, isValid(changeAgeSchema), changeAge);
// router.patch(
//   "/height",
//   isAuthenticated,
//   isValid(changeHeightSchema),
//   changeHeight
// );
// router.patch(
//   "/weight",
//   isAuthenticated,
//   isValid(changeWeightSchema),
//   changeWeight
// );
// router.patch(
//   "/profileImage",
//   isAuthenticated,
//   fileUploader(fliterObject.image).single("profileImage"),
//   changePhoto
// );

export default router;
