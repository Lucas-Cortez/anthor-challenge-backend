import { User } from "@prisma/client";
import { ICreateUserDTO } from "../useCases/user/createUser/ICreateUserDTO";

export interface IUserRepository {
  create(user: ICreateUserDTO): Promise<User>;
}
