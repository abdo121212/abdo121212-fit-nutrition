import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config();
  
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export default cloudinary;



// cloudinary.image("girls_yellow_wall.jpg", {transformation: [
//   {aspect_ratio: "0.5", gravity: "auto", width: 433, crop: "fill"},
//   {quality: "auto"},
//   {fetch_format: "auto"}
//   ]})