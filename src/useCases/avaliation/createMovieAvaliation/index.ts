import { prisma } from "../../../infra/database";
import { PrismaAvaliationRepository } from "../../../repositories/implementations/PrismaAvaliationRepository";
import { CreateMovieAvaliationController } from "./CreateMovieAvaliationController";
import { CreateMovieAvaliationUseCase } from "./CreateMovieAvaliationUseCase";

const prismaAvaliationRepository = new PrismaAvaliationRepository(prisma);
const createMovieAvaliationUseCase = new CreateMovieAvaliationUseCase(prismaAvaliationRepository);
const createMovieAvaliationController = new CreateMovieAvaliationController(createMovieAvaliationUseCase);

export { createMovieAvaliationController, createMovieAvaliationUseCase };
