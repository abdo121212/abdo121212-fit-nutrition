import { Router } from "express";
import { isAuthenticated } from "./../../middleware/isAuthenticated.js";
import { isValid } from "../../middleware/validation.js";
import {
  changeNameSchema,
  changeAgeSchema,
  changeHeightSchema,
  changeWeightSchema,
} from "./changeUser.validation.js";
import {
  changeName,
  changeAge,
  changeHeight,
  changeWeight,
  changePhoto,
} from "./changeUser.controller.js";
import { fileUploader, fliterObject } from "../../utils/fileUploader.js";

const router = Router();

router.patch("/name", isAuthenticated, isValid(changeNameSchema), changeName);
router.patch("/age", isAuthenticated, isValid(changeAgeSchema), changeAge);
router.patch(
  "/height",
  isAuthenticated,
  isValid(changeHeightSchema),
  changeHeight
);
router.patch(
  "/weight",
  isAuthenticated,
  isValid(changeWeightSchema),
  changeWeight
);
router.patch(
  "/profileImage",
  isAuthenticated,
  fileUploader(fliterObject.image).single("profileImage"),
  changePhoto
);

export default router;
