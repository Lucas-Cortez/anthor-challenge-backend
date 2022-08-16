import { Movie } from "@prisma/client";
import { IMovieRepository } from "../../../repositories/IMovieRepository";

export class DeleteMovieUseCase {
  constructor(private movieRepository: IMovieRepository) {}

  public async execute(movie_id: number): Promise<Movie> {
    return await this.movieRepository.delete(movie_id);
  }
}
