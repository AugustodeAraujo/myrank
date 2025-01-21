import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { UserService } from "../services/UserService";
import { UserRepository } from "../repositories/UserRepository";

const userRoutes = Router();
const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

userRoutes.get("/users", (req, res) => userController.getAllUsers(req, res));
userRoutes.post("/users", (req, res) => userController.create(req, res));

export default userRoutes;
