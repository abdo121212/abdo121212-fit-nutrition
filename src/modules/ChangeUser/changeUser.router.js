import { Router } from "express";
import { isAuthenticated } from "./../../middleware/isAuthenticated.js";
import { changeUser, changeWeight } from "./changeUser.controller.js";
import { fileUploader, fliterObject } from "../../utils/fileUploader.js";
import { changeWeightSchema } from "./changeUser.validation.js";

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
router.patch(
  "/weight",
  isAuthenticated,
  isValid(changeWeightSchema),
  changeWeight
);
// router.patch(
//   "/profileImage",
//   isAuthenticated,
//   fileUploader(fliterObject.image).single("profileImage"),
//   changePhoto
// );

export default router;
