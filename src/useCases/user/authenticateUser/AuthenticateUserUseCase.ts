import { IHashProvider } from "../../../providers/IHashProvider";
import { IUserRepository } from "../../../repositories/IUserRepository";

export class AuthenticateUserUseCase {
  constructor(private userRepository: IUserRepository, private hashProvider: IHashProvider) {}

  public async execute(UserName: string): Promise<> {}
}
