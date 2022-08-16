import { Request, Response } from "express";
import { UpdateMovieUseCase } from "./UpdateMovieUseCase";

export class UpdateMovieController {
  constructor(private updateMovieUseCase: UpdateMovieUseCase) {}

  public async handle(request: Request, response: Response): Promise<Response> {
    const { movie_id } = request.params;
    const movie_data = request.body;

    const data = await this.updateMovieUseCase.execute(parseInt(movie_id), movie_data);

    return response.status(200).json(data);
  }
}
