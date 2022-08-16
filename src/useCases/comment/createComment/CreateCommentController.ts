import { Request, Response } from "express";
import { CreateCommentUseCase } from "./CreateCommentUseCase";

export class CreateCommentController {
  constructor(private createCommentUseCase: CreateCommentUseCase) {}

  public async handle(request: Request, response: Response): Promise<Response> {
    const { avaliation_id } = request.params;
    const { user_id, comment } = request.body;

    const data = await this.createCommentUseCase.execute({
      avaliation_id: parseInt(avaliation_id),
      user_id,
      comment,
    });

    return response.status(200).json(data);
  }
}
