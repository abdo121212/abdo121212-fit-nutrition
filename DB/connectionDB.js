import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(process.env.CONNECTION_DB)
    .then(() => console.log("DB Connected Successfully !"))
    .catch((error) => console.log("Error  : ", error));
};
