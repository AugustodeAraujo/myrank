import { v4 as uuidv4, validate as isUUID } from "uuid";

import { supabase } from "../../../config/supabase";

import { CreateLeagueDTO } from "../dtos/CreateLeagueDTO";
import { LeagueModel } from "../models/LeagueModel";

export class LeagueRepository {
  private table = "leagues";

  async create(createLeagueDTO: CreateLeagueDTO): Promise<any> {
    console.log(
      "🚀 ~ LeagueRepository ~ create ~ createLeagueDTO:",
      createLeagueDTO
    );

    const createLeague: LeagueModel = {
      id: uuidv4(),
      name: createLeagueDTO.name,
      created_by: "40c315b8-883a-41f2-aa1f-07de41e1c62e",
    };
    console.log("🚀 ~ LeagueRepository ~ create ~ createLeague:", createLeague);

    const { data, error } = await supabase
      .from(this.table)
      .insert(createLeague);

    if (error) {
      console.error(
        "Error at repository while trying to create League:",
        data,
        error
      );
      throw new Error(error.message);
    }

    return createLeague;
  }

  async findByName(leagueName: string): Promise<LeagueModel | null> {
    const { data: league, error } = await supabase
      .from(this.table)
      .select("*")
      .eq("name", leagueName)
      .single();

    if (error && error.code !== "PGRST116") {
      throw new Error(error.message);
    }
    return league;
  }
}
