import { Schema, model } from "mongoose";

const foodSchema = new Schema(
  {
    name_en: { type: String, required: true },
    name_ar: { type: String, required: true },
    article_summary_en: { type: String, required: true },
    article_summary_ar: { type: String, required: true },
    calories: { type: Number, required: true },
    nutritional_benefits: { type: String, required: true },
    image: {
      url: { type: String, required: true },
      id: { type: String, required: true },
    },
    category: {
      type: String,
      required: true,
      enum: [
        "breakfast",
        "lunch",
        "dinner",
        "light-dinner",
        "light-breakfast",
        "snack",
      ],
    },
  },
  { timestamps: true }
);

export const Food = model("Food", foodSchema);
