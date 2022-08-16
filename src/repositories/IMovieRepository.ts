import { Movie } from "@prisma/client";
import { ICreateMovieDTO } from "../useCases/movie/createMovie/ICreateMovieDTO";
import { IUpdateMovieDTO } from "../useCases/movie/updateMovie/IUpdateMovieDTO";

export interface IMovieRepository {
  findAll(): Promise<Movie[]>;

  create(movie: ICreateMovieDTO): Promise<Movie>;

  delete(movie_id: number): Promise<Movie>;

  update(movie_id: number, movie_data: IUpdateMovieDTO): Promise<Movie>;
}
