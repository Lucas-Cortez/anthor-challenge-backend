import { prisma } from "../../../infra/database";
import { PrismaMovieRepository } from "../../../repositories/implementations/PrismaMovieRepository";
import { CreateMovieController } from "./CreateMovieController";
import { CreateMovieUseCase } from "./CreateMovieUseCase";

const prismaMovieRepository = new PrismaMovieRepository(prisma);
const createMovieUseCase = new CreateMovieUseCase(prismaMovieRepository);
const createMovieController = new CreateMovieController(createMovieUseCase);

export { createMovieController, createMovieUseCase };
