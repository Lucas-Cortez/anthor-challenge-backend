import { Request, Response } from "express";
import { GetAvaliationCommentsUseCase } from "./GetAvaliationCommentsUseCase";

export class GetAvaliationCommentsController {
  constructor(private getAvaliationCommentsUseCase: GetAvaliationCommentsUseCase) {}

  public async handle(request: Request, response: Response): Promise<Response> {
    const data = request;
    return response.status(200).json(data);
  }
}
