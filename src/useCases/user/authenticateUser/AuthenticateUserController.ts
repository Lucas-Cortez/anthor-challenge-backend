import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

export class AuthenticateUserController {
  constructor(private authenticateUserUseCase: AuthenticateUserUseCase) {}

  public async handle(request: Request, response: Response): Promise<Response> {
    return response.status(200).json();
  }
}
