import { Movie } from "@prisma/client";
import { IMovieRepository } from "../../../repositories/IMovieRepository";

export class GetAllMoviesUseCase {
  constructor(private movieRepository: IMovieRepository) {}

  public async execute(): Promise<Movie[]> {
    return await this.movieRepository.findAll();
  }
}
