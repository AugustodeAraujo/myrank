import { CreateLeagueDTO } from "../dtos/CreateLeagueDTO";
import { LeagueRepository } from "../repositories/LeagueRepository";

export class LeagueService {
  private leagueRepository: LeagueRepository;

  constructor(leagueRepository: LeagueRepository) {
    this.leagueRepository = leagueRepository;
  }

  async createLeague(createLeagueDTO: CreateLeagueDTO): Promise<any | null> {
    const leagueExists = await this.leagueRepository.findByName(
      createLeagueDTO.name
    );

    if (leagueExists) {
      throw new Error("League name already exists");
    }

    const user = await this.leagueRepository.create(createLeagueDTO);
    console.log("Service res:", user);

    return user;
  }
}
