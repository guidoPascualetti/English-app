import express from "express";
// import usersRouter from "./apps/users/userRouter.js";
import initialLog from "./helpers/initialLog.js";

const app = express();
app.use(express.json());

/**
 * @description Logs all incoming HTTP requests to the console.
 */
app.use((req, res, next) => {
  console.log(initialLog(req));

  next();
});
//
app.get("/ping", (req, res) => res.send("Pong"));

// app.use(`/api/v1/users`, usersRouter);

/**
 * @description Logs all errors to the console.
 * @param {Error} err - The error object.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {Function} next - The next middleware function.
 * @returns {void}
 */

// Error Handler
app.use((err, req, res, next) => {
  console.log("------------------------------------");
  console.log(err.statusCode);
  res.status(err.statusCode).send(err.message);
});

export default app;
