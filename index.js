import { connectDB } from "./DB/connectionDB.js";
import express from "express";
import { appRouter } from "./src/utils/appRouter.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();
connectDB();
appRouter(app, express);

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
