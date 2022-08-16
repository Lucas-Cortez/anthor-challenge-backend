import { User } from "@prisma/client";
import { IHashProvider } from "../../../providers/IHashProvider";
import { IUserRepository } from "../../../repositories/IUserRepository";
import { ICreateUserDTO } from "./ICreateUserDTO";

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository, private hashProvider: IHashProvider) {}

  public async execute(user: ICreateUserDTO): Promise<User> {
    const hashedPassword = await this.hashProvider.create(user.password);

    return await this.userRepository.create({ ...user, password: hashedPassword });
  }
}
