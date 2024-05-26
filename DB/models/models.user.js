import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    fullName: { type: String, required: true, min: 10, max: 30 },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    birthdays: Date,
    role: { type: String, enum: ["admin", "user"], default: "user" },
    status: { type: String, enum: ["online", "offline"], default: "offline" },
    gender: { type: String, enum: ["male", "female"] },
    activityLevel: { type: String, enum: ["low", "middle", "high"] },
    trainingPriority: { type: String, enum: ["low", "middle", "high"] },
    objectives: {
      type: String,
      enum: ["Diet", "Bullking", "Fitness", "Strength"],
    },
    perfect_weight: Number,
    isConfirmed: { type: Boolean, default: false },
    activationCode: String,
    forGetCode: String,
    OTPCode: String,
    profileImage: {
      url: {
        type: String,
        required: true,
        default:
          "https://res.cloudinary.com/ddqzfqu1j/image/upload/v1714016835/yl8r4pdrwppmt6kpfdj0.webp",
      },
      id: { type: String },
    },
    weight: { type: Number },
    height: { type: Number },
    diseases: { type: String },
    water_consumation: Number,
  },
  { timestamps: true }
);

// Define virtual middleware for calculating age
userSchema.virtual("finalAge").get(function () {
  const today = new Date();
  const thisYearBirthday = new Date(
    today.getFullYear(),
    this.birthdays.getMonth(),
    this.birthdays.getDate()
  );
  let age = today.getFullYear() - this.birthdays.getFullYear();

  if (today < thisYearBirthday) {
    age--;
  }

  return age;
});

userSchema.virtual("calories").get(function () {
  let BMR;
  if (this.gender === "male") {
    if (this.activityLevel === "low") {
      BMR =
        88.362 +
        13.397 * this.weight +
        4.799 * this.height -
        5.677 * this.finalAge +
        50;
    }
    if (this.activityLevel === "middle") {
      BMR =
        88.362 +
        13.397 * this.weight +
        4.799 * this.height -
        5.677 * this.finalAge +
        123;
    }
    if (this.activityLevel === "high") {
      BMR =
        88.362 +
        13.397 * this.weight +
        4.799 * this.height -
        5.677 * this.finalAge +
        198;
    }
  } else {
    if (this.activityLevel === "low") {
      BMR =
        447.593 +
        9.247 * this.weight +
        3.098 * this.height -
        4.33 * this.finalAge;
      50;
    }
    if (this.activityLevel === "middle") {
      BMR =
        447.593 +
        9.247 * this.weight +
        3.098 * this.height -
        4.33 * this.finalAge;
      123;
    }
    if (this.activityLevel === "high") {
      BMR =
        447.593 +
        9.247 * this.weight +
        3.098 * this.height -
        4.33 * this.finalAge;
      198;
    }
  }

  return BMR;
});

export const User = model("User", userSchema);
