import { Request, Response } from "express";
import { GetAvaliationCommentsUseCase } from "./GetAvaliationCommentsUseCase";

export class GetAvaliationCommentsController {
  constructor(private getAvaliationCommentsUseCase: GetAvaliationCommentsUseCase) {}

  public async handle(request: Request, response: Response): Promise<Response> {
    const { avaliation_id } = request.params;

    const data = await this.getAvaliationCommentsUseCase.execute(parseInt(avaliation_id));

    return response.status(200).json(data);
  }
}
