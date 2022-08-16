import { Request, Response } from "express";
import { CreateMovieUseCase } from "./CreateMovieUseCase";

export class CreateMovieController {
  constructor(private createMovieUseCase: CreateMovieUseCase) {}

  public async handle(request: Request, response: Response): Promise<Response> {
    const { image_url, year, title, running_time } = request.body;
    const data = await this.createMovieUseCase.execute({ image_url, year, title, running_time });
    return response.status(200).json(data);
  }
}
