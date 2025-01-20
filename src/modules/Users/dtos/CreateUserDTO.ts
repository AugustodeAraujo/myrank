export interface CreateUserDTO {
  name: string;
  email: string;
  nickname: string;
  password: string;
  isAdmin?: boolean;
}
