import { PrismaClient, User } from "@prisma/client";
import { ICreateUserDTO } from "../../useCases/user/createUser/ICreateUserDTO";
import { IUserRepository } from "../IUserRepository";

export class PrismaUserRepository implements IUserRepository {
  constructor(private prismaClient: PrismaClient) {}

  public async create(user: ICreateUserDTO): Promise<User> {
    const { password, ...rest } = user;
    return await this.prismaClient.user.create({ data: { ...rest, hash_password: password } });
  }
}
