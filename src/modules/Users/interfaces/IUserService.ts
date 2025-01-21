import { CreateUserDTO } from "../dtos/CreateUserDTO";
import { ResponseModel } from "../models/ResponseModel";
import { UserModel } from "../models/UserModel";

export interface IUserService {
  createUser(data: CreateUserDTO): Promise<ResponseModel | null>;
  getAllUsers(): Promise<UserModel[] | null>;
}
