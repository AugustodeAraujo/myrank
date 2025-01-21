import { Request, Response } from "express";
import { z } from "zod";

import { CreateUserSchema } from "../schemas/userSchema";
import { UserService } from "../services/UserService";

export class UserController {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  async create(req: Request, res: Response): Promise<Response> {
    try {
      const validatedData = CreateUserSchema.parse(req.body);
      const user = await this.userService.createUser(validatedData);
      console.log("Response User:", user);
      return res.status(201).json(user);
    } catch (error) {
      console.error(error); // Mantenha para depuração

      if (error instanceof z.ZodError) {
        return res.status(400).json({ errors: error.errors });
      }

      // Tratar outros tipos de erro, garantindo que a mensagem seja retornada
      return res.status(500).json({
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
      });
    }
  }
  async getAllUsers(req: Request, res: Response): Promise<Response> {
    try {
      const users = await this.userService.getAllUsers();

      return res.status(201).json(users);
    } catch (error) {
      console.error(error);

      return res.status(500).json({
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
      });
    }
  }
}
