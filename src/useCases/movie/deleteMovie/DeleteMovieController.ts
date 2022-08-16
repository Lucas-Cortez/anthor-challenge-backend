import { Request, Response } from "express";
import { DeleteMovieUseCase } from "./DeleteMovieUseCase";

export class DeleteMovieController {
  constructor(private deleteMovieUseCase: DeleteMovieUseCase) {}

  public async handle(request: Request, response: Response): Promise<Response> {
    const { movie_id } = request.params;

    const data = await this.deleteMovieUseCase.execute(parseInt(movie_id));

    return response.status(200).json(data);
  }
}
