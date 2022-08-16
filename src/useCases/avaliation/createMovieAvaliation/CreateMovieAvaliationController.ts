import { Request, Response } from "express";
import { CreateMovieAvaliationUseCase } from "./CreateMovieAvaliationUseCase";

export class CreateMovieAvaliationController {
  constructor(private createMovieAvaliationUseCase: CreateMovieAvaliationUseCase) {}

  public async handle(request: Request, response: Response): Promise<Response> {
    const { movie_id } = request.params;
    const { user_id, score } = request.body;

    const data = await this.createMovieAvaliationUseCase.execute({
      movie_id: parseInt(movie_id),
      user_id,
      score,
    });

    return response.status(200).json(data);
  }
}
