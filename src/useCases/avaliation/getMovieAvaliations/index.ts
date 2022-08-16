import { prisma } from "../../../infra/database";
import { PrismaAvaliationRepository } from "../../../repositories/implementations/PrismaAvaliationRepository";
import { GetMovieAvaliationsController } from "./GetMovieAvaliationsController";
import { GetMovieAvaliationsUseCase } from "./GetMovieAvaliationsUseCase";

const prismaAvaliationRepository = new PrismaAvaliationRepository(prisma);
const getMovieAvaliationsUseCase = new GetMovieAvaliationsUseCase(prismaAvaliationRepository);
const getMovieAvaliationsController = new GetMovieAvaliationsController(getMovieAvaliationsUseCase);

export { getMovieAvaliationsController, getMovieAvaliationsUseCase };
