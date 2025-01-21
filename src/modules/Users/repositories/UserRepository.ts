import { v4 as uuidv4, validate as isUUID } from "uuid";

import { supabase } from "../../../config/supabase";

import { IUserRepository } from "../interfaces/IUserRepository";

import { CreateUserDTO } from "../dtos/CreateUserDTO";
import { UserModel } from "../models/UserModel";

export class UserRepository implements IUserRepository {
  private table = "users";

  async create(data: CreateUserDTO): Promise<any> {
    const createUser: UserModel = {
      id: uuidv4(),
      ...data,
    };

    console.log(createUser);

    const { data: createdUser, error } = await supabase
      .from(this.table)
      .insert(createUser);

    if (error) {
      console.error(
        "Error at repository while trying to create User:",
        data,
        error
      );
      throw new Error(error.message);
    }

    return createUser;
  }

  async findByEmail(email: string): Promise<UserModel | null> {
    const { data: user, error } = await supabase
      .from(this.table)
      .select("*")
      .eq("email", email)
      .single();

    if (error && error.code !== "PGRST116") {
      throw new Error(error.message);
    }

    return user;
  }

  async findById(id: string): Promise<UserModel | null> {
    const { data: user, error } = await supabase
      .from(this.table)
      .select("*")
      .eq("id", id)
      .single();

    if (error && error.code !== "PGRST116") {
      throw new Error(error.message);
    }

    return user;
  }

  async findAll(): Promise<UserModel[]> {
    const { data: users, error } = await supabase
      .from(this.table)
      .select("name, nickname, email");
  
    if (error) {
      console.error("Error at repository while trying to fetch all users:", error);
      throw new Error(error.message);
    }
  
    return users as UserModel[];
  }
  


}
