import cors from "cors";
import authRouter from "../modules/auth/auth.router.js";
import changeUser from "../modules/ChangeUser/changeUser.router.js";
import calories from "../modules/Calories/calories.router.js";
import food from "../modules/Foods/food.router.js";
import compression from "compression";
export const appRouter = (app, express) => {
  // cors
  app.use(cors());
  // global middleware
  app.use(express.json());

  app.use(compression());

  // Router
  //  auth
  app.use("/auth", authRouter);
  app.use("/change", changeUser);
  app.use("/calories", calories);
  app.use("/food", food);

  // global error handler
  app.use((error, req, res, next) => {
    return res
      .status(error.cause || 200)
      .json({ success: false, message: error.message, stack: error.stack });
  });

  // page not Found
  app.all(
    ("*",
    (req, res, next) => {
      return next(new Error("Page not found!"));
    })
  );
};
