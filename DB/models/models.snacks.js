import { Schema, model } from "mongoose";

const snacksSchema = new Schema({
  name_en: { type: String, required: true },
  name_ar: { type: String, required: true },
  article_summary_en: { type: String, required: true },
  article_summary_ar: { type: String, required: true },
  calories: { type: Number, required: true },
  proteins: { type: Number, required: true },
  carbs: { type: Number, required: true },
  fats: { type: Number, required: true },
  image: {
    url: { type: String, required: true },
    id: { type: String, required: true },
  },
});

export const Snacks = model("Snacks", snacksSchema);
