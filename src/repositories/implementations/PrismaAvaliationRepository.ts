import { Avaliation, PrismaClient } from "@prisma/client";
import { ICreateMovieAvaliationDTO } from "../../useCases/avaliation/createMovieAvaliation/ICreateMovieAvaliationDTO";
import { IAvaliationRepository } from "../IAvaliationRepository";

export class PrismaAvaliationRepository implements IAvaliationRepository {
  constructor(private prismaClient: PrismaClient) {}

  public async findMovieAvaliations(movie_id: number): Promise<Avaliation[]> {
    return await this.prismaClient.avaliation.findMany({ where: { movie_id: movie_id } });
  }

  public async createMovieAvaliation(avaliation: ICreateMovieAvaliationDTO): Promise<Avaliation> {
    return await this.prismaClient.avaliation.create({ data: avaliation });
  }
}
