import express from "express";
import UserController from "../controllers/usersController.js";
import pages from "../middlewares/pages.js";

const router = express.Router();

router
  .get("/users", UserController.listUsers, pages)
  .get("/users/:id", UserController.listUsersById)
  .post("/users", UserController.registerUser)
  .put("/users/:id", UserController.updateUser)
  .delete("/users/:id", UserController.deleteUser);

export default router;   