import { Router } from "express";
import { LeagueController } from "../controllers/LeagueController";
import { LeagueService } from "../services/LeagueService";
import { LeagueRepository } from "../repositories/LeagueRepository";

const leagueRoutes = Router();

const leagueRepository = new LeagueRepository();
const leagueService = new LeagueService(leagueRepository);
const leagueController = new LeagueController(leagueService);

leagueRoutes.post("/league", (req, res) => leagueController.create(req, res));

export default leagueRoutes;
