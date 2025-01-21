import { IUserService } from "../interfaces/IUserService";
import { CreateUserDTO } from "../dtos/CreateUserDTO";
import { UserModel } from "../models/UserModel";
import { UserRepository } from "../repositories/UserRepository";
import { ResponseModel } from "../models/ResponseModel";

export class UserService implements IUserService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async createUser(data: CreateUserDTO): Promise<ResponseModel | null> {
    const userExists = await this.userRepository.findByEmail(data.email);

    if (userExists) {
      throw new Error("User already exists or email is in use.");
    }

    const user = await this.userRepository.create(data);
    console.log("Service res:", user);

    return user;
  }

  async getAllUsers(): Promise<UserModel[] | null> {
    return this.userRepository.findAll();
  }
}
