import { Request, Response } from "express";
import { GetMovieAvaliationsUseCase } from "./GetMovieAvaliationsUseCase";

export class GetMovieAvaliationsController {
  constructor(private getMovieAvaliationsUseCase: GetMovieAvaliationsUseCase) {}

  public async handle(request: Request, response: Response): Promise<Response> {
    const { movie_id } = request.params;
    const data = await this.getMovieAvaliationsUseCase.execute(parseInt(movie_id));
    return response.status(200).json(data);
  }
}
