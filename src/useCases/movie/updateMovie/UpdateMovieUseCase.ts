import { Movie } from "@prisma/client";
import { IMovieRepository } from "../../../repositories/IMovieRepository";
import { IUpdateMovieDTO } from "./IUpdateMovieDTO";

export class UpdateMovieUseCase {
  constructor(private movieRepository: IMovieRepository) {}

  public async execute(movie_id: number, movie_data: IUpdateMovieDTO): Promise<Movie> {
    return await this.movieRepository.update(movie_id, movie_data);
  }
}
