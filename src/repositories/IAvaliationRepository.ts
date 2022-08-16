import { Avaliation } from "@prisma/client";
import { ICreateMovieAvaliationDTO } from "../useCases/avaliation/createMovieAvaliation/ICreateMovieAvaliationDTO";

export interface IAvaliationRepository {
  findMovieAvaliations(movie_id: number): Promise<Avaliation[]>;

  createMovieAvaliation(avaliation: ICreateMovieAvaliationDTO): Promise<Avaliation>;
}
