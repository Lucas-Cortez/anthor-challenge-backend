import { Movie } from "@prisma/client";
import { IMovieRepository } from "../../../repositories/IMovieRepository";
import { ICreateMovieDTO } from "./ICreateMovieDTO";

export class CreateMovieUseCase {
  constructor(private movieRepository: IMovieRepository) {}

  public async execute(movie: ICreateMovieDTO): Promise<Movie> {
    return await this.movieRepository.create(movie);
  }
}
