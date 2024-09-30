import { catchError } from "./../../utils/catchError.js";
import { User } from "./../../../DB/models/models.user.js";
import bcrypt from "bcryptjs";
import { Token } from "./../../../DB/models/models.token.js";
import jwt from "jsonwebtoken";
import { sendEmail } from "./../../utils/sendEmail.js";
import crypto from "crypto";
import randomstring from "randomstring";
import { snedMessage } from "../../utils/snedMSM.js";
import { forgetCodeTemp, signUpTemp } from "../../utils/generateHTML.js";

// register
export const register = catchError(async (req, res, next) => {
  //data >> req
  const {
    fullName,
    email,
    password,
    weight,
    height,
    birthdays,
    gender,
    activityLevel,
    trainingPriority,
    objectives,
  } = req.body;
  // checks
  // check email
  const isEmail = await User.findOne({ email });
  if (isEmail) return next(new Error("Email Already Exists"));

  // hashPass
  const hashPass = bcrypt.hashSync(password, 8);

  const activationCode = randomstring.generate({
    length: 4,
    charset: "numeric",
  });

  // snedMessage({
  //   to: `2${phone}`,
  //   from: "Fit_Nutrition",
  //   text: `*${OTPCode}* is your verification code. Do not share this code with anyone. `,
  // });

  const user = await User.create({
    fullName,
    email,
    password: hashPass,
    birthdays,
    activationCode,
    gender,
    height,
    weight,
    activityLevel,
    trainingPriority,
    objectives,
  });

  console.log(birthdays);

  const isSend = sendEmail({
    to: email,
    subject: "Confirm Eamil",
    text: `Hello ${user.fullName} From Giga Acadmay `,
    html: signUpTemp(activationCode),
    // code,
  });

  //send response
  return isSend
    ? res.status(201).json({
        success: true,
        message: " successfully registered , Please review Your  Email",
      })
    : next(new Error("SomeThing Went wrong !"));
});
// login
export const login = catchError(async (req, res, next) => {
  // data >> body
  const { email, password } = req.body;

  // check email
  const user = await User.findOne({ email });

  if (!user) return next(new Error("Invalid Email!", { cause: 400 }));

  // check password
  const matchPass = bcrypt.compareSync(password, user.password);
  if (!matchPass) next(new Error("Invalid Password !", { cause: 400 }));
  // check phone

  // check confrim Email
  if (!user.isConfirmed)
    return next(
      new Error("Please  Check  review Your Email To Active Account", {
        cause: 400,
      })
    );
  // generate token
  const token = jwt.sign(
    { email: user.email, id: user._id },
    process.env.TOKEN_KEY
  );

  // create token
  await Token.create({
    token,
    user: user._id,
    agent: req.headers["user_agent"],
  });
  user.status = "online";
  await user.save();
  // send Response
  return res.json({
    success: true,
    message: "Token created successfully",
    token,
  });
});
// activateAccount
export const activateAccount = catchError(async (req, res, next) => {
  const user = await User.findOneAndUpdate(
    { activationCode: req.body.activationCode },
    { isConfirmed: true, $unset: { activationCode: 1 } }
  );

  if (!user) return next(new Error("Invalid Code !", { cause: 404 }));

  return res.status(201).json({
    success: true,
    message:
      "Congratuation , your Account  is Now  Activated , try to login now ",
  });
});

//
export const nextInfo = catchError(async (req, res, next) => {
  const { gender, weight, height, birthdays, diseases } = req.body;

  const user = req.user;

  const nextInfo = await User.findOneAndUpdate(
    req.user,
    {
      gender,
      weight,
      height,
      birthdays,
      diseases,
    },
    { new: true }
  );

  const dateNew = new Date();

  console.log(dateNew.getFullYear());

  const birthdaysUser = new Date(birthdays);

  console.log(birthdaysUser.getFullYear());

  user.finalAge = dateNew.getFullYear() - birthdaysUser.getFullYear();

  user.perfect_weight = user.height / 2;
  user.save();
  if (!nextInfo) return next(new Error("User not found"));

  return res.json({
    success: true,
    perfect_weight: height / 2,
    diseases,
  });
});

//send Forget Code
export const sendForgetCode = catchError(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return next(new Error("Invalid Email"));
  //generate code
  const code = randomstring.generate({
    length: 4,
    charset: "numeric",
  });
  user.forGetCode = code;
  await user.save();
  //send email
  sendEmail({
    to: user.email,
    subject: "rest Password",
    text: `Hello${user.userName}`,
    html: forgetCodeTemp(code),
  });
  return res.json({ success: true, message: "check your Eamil" });
});
export const OTPCode = catchError(async (req, res, next) => {
  // body >> code
  let user = await User.findOneAndUpdate(
    { forGetCode: req.body.code },
    { $unset: { forGetCode: 1 } }
  );
  console.log(" user", user);
  if (!user) return next(new Error("Invalid Code"));

  return res.json({ success: true, email: user.email });
});

//reset password
export const resetPassword = catchError(async (req, res, next) => {
  let user = await User.findOne({ email: req.params.email });
  if (!user) return next(new Error("User Not Foudn !"));
  user = await User.findOne({ email: req.params.email });
  if (user.forGetCode !== undefined)
    return next(new Error("connt Update Password"));
  // if (!user) return next(new Error("Invalid Email"));

  user.password = bcrypt.hashSync(req.body.password, 8);
  await user.save();
  const tokens = await Token.find({ user: user._id });
  tokens.forEach(async (token) => {
    token.isValid = false;
    await token.save();
  });
  return res.json({ success: true, message: " Try to login again !" });
});

export const deleteUser = catchError(async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) return next(new Error("User Not Found"));

  await User.findOneAndDelete({ email });

  return res.json({ success: true, message: "deleted successfully" });
});

export const getUser = catchError(async (req, res, next) => {
  const user = await User.findOne({ email: req.user.email });
  if (!user) return next(new Error("User Not Found !"));
  return res.json({ success: true, user });
});
