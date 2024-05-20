import express from "express";
import userController from "./userController.js";

const userRouter = express.Router();
userRouter.get("/", userController.getUsers);
userRouter.post("/", userController.createUser);
userRouter.get("/:id", userController.getUserById);

export default userRouter;
