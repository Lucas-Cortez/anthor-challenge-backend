import { Movie, PrismaClient } from "@prisma/client";
import { ICreateMovieDTO } from "../../useCases/movie/createMovie/ICreateMovieDTO";
import { IUpdateMovieDTO } from "../../useCases/movie/updateMovie/IUpdateMovieDTO";
import { IMovieRepository } from "../IMovieRepository";

export class PrismaMovieRepository implements IMovieRepository {
  constructor(private prismaClient: PrismaClient) {}

  public async findAll(): Promise<Movie[]> {
    return await this.prismaClient.movie.findMany();
  }

  public async create(movie: ICreateMovieDTO): Promise<Movie> {
    return await this.prismaClient.movie.create({ data: movie });
  }

  public async delete(movie_id: number): Promise<Movie> {
    return await this.prismaClient.movie.delete({ where: { movie_id: movie_id } });
  }

  public async update(movie_id: number, movie_data: IUpdateMovieDTO): Promise<Movie> {
    return await this.prismaClient.movie.update({ data: movie_data, where: { movie_id: movie_id } });
  }
}
