import { CreateUserDTO } from "../dtos/CreateUserDTO";
import { ResponseModel } from "../models/ResponseModel";
import { UserModel } from "../models/UserModel";

export interface IUserRepository {
  create(data: CreateUserDTO): Promise<ResponseModel>;
  findByEmail(email: string): Promise<UserModel | null>;
  findById(id: string): Promise<UserModel | null>;
  findAll(): Promise<UserModel[] | null>;
}
