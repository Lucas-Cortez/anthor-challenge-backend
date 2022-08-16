import { Request, Response } from "express";
import { CreateUserUseCase } from "./createUserUseCase";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  public async handle(request: Request, response: Response): Promise<Response> {
    const { username, name, password } = request.body;

    const data = await this.createUserUseCase.execute({ username, name, password });

    return response.status(200).json(data);
  }
}
