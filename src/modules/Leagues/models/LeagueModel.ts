import { UUID } from "crypto";

export type LeagueModel = {
  id: string;
  name: string;
  created_by: UUID;
 
};
