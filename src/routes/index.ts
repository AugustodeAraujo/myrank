import { Router } from "express";

// module routes
import userRoutes from "../modules/Users/routes/UserRoutes";
import leagueRoutes from "../modules/Leagues/routes/LeagueRoutes";

const router = Router();
router.use(userRoutes);
router.use(leagueRoutes);

export default router;
