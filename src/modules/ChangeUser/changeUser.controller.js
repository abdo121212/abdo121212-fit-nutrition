import { catchError } from "../../utils/catchError.js";
import { User } from "./../../../DB/models/models.user.js";
import cloudinary from "./../../utils/cloud.js";

// name

export const changeUser = catchError(async (req, res, next) => {
  const user = await User.findById(req.user._id);
  if (!user) return next(new Error(`User not found`));

  user.fullName = req.body.fullName ? req.body.fullName : user.fullName;

  user.height = req.body.height ? req.body.height : user.height;

  user.weight = req.body.weight ? req.body.weight : user.weight;

  if (req.file) {
    const { public_id, secure_url } = await cloudinary.uploader.upload(
      req.file.path,
      { public_id: user.profileImage.id }
    );
    user.profileImage.url = secure_url;
  }

  user.save();
  res.json({ success: true, user });
});
// age
export const changeAge = catchError(async (req, res, next) => {
  const user = await User.findById(req.user._id);
  if (!user) return next(new Error(`User not found`));
  user.birthdays = req.body.birthdays ? req.body.birthdays : user.birthdays;
  user.save();
  res.json({ success: true, user });
});

//  changeHeight

export const changeHeight = catchError(async (req, res, next) => {
  const user = await User.findById(req.user._id);
  if (!user) return next(new Error(`User not found`));
  user.height = req.body.height ? req.body.height : user.height;

  user.save();
  res.json({ success: true, user });
});

export const changeWeight = catchError(async (req, res, next) => {
  const user = await User.findById(req.user._id);
  if (!user) return next(new Error(`User not found`));
  user.weight = req.body.weight ? req.body.weight : user.weight;
  user.save();
  res.json({ success: true, user });
});

export const changePhoto = catchError(async (req, res, next) => {
  const user = req.user;
  if (!user) return next(new Error(`User not found`));

  if (req.file) {
    const { public_id, secure_url } = await cloudinary.uploader.upload(
      req.file.path,
      { public_id: user.profileImage.id }
    );
    user.profileImage.url = secure_url;
  }

  user.save();
  return res.json({ success: true, user });
});

// user.save();

// const id = req.user._id;

// const user = await User.findByIdAndUpdate(
//   id,
//   {
//     profileImage: req.file.path,
//   },
//   { new: true }
// );
