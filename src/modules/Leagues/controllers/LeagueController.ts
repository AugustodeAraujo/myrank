import { Request, Response } from "express";
import { z } from "zod";
import { LeagueService } from "../services/LeagueService";

export class LeagueController {
  private leagueService: LeagueService;

  constructor(userService: LeagueService) {
    this.leagueService = userService;
  }

  async create(req: Request, res: Response): Promise<Response> {
    try {
      const league = await this.leagueService.createLeague(req.body);

      return res.status(201).json(league);
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
}
