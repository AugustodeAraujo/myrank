import { UserModel } from "../models/userModel";

export class UserRepository {
  private users: UserModel[] = [];

  async create(user: UserModel): Promise<UserModel> {
    this.users.push(user);
    return user;
  }

  async findByEmail(email: string): Promise<UserModel | undefined> {
    return this.users.find((user) => user.email === email);
  }

  async findAll(): Promise<UserModel[]> {
    return this.users;
  }
}
