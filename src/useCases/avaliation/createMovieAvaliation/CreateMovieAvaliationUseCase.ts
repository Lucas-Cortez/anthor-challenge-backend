import { Avaliation } from "@prisma/client";
import { IAvaliationRepository } from "../../../repositories/IAvaliationRepository";
import { ICreateMovieAvaliationDTO } from "./ICreateMovieAvaliationDTO";

export class CreateMovieAvaliationUseCase {
  constructor(private avaliationRepository: IAvaliationRepository) {}

  public async execute(avaliation: ICreateMovieAvaliationDTO): Promise<Avaliation> {
    return await this.avaliationRepository.createMovieAvaliation(avaliation);
  }
}
