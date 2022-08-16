import { Avaliation } from "@prisma/client";
import { IAvaliationRepository } from "../../../repositories/IAvaliationRepository";

export class GetMovieAvaliationsUseCase {
  constructor(private avaliationRepository: IAvaliationRepository) {}

  public async execute(movie_id: number): Promise<Avaliation[]> {
    return await this.avaliationRepository.findMovieAvaliations(movie_id);
  }
}
