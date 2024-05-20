import userModel from "./userModel.js";
import catchedAsync from "../utils/errorsHandler/catchedAsync.js";
import okResponse from "../utils/responses/okResponse.js";
import { ClientError } from "../utils/errorsHandler/errorsHandler.js";
async function getUsers(req, res) {
  const users = await userModel.select();
  okResponse(res, 200, users);
}
async function createUser(req, res) {}
async function getUserById(req, res) {}
const userController = {};
export default userController;
