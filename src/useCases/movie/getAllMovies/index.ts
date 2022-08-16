import { prisma } from "../../../infra/database";
import { PrismaMovieRepository } from "../../../repositories/implementations/PrismaMovieRepository";
import { GetAllMoviesController } from "./getAllMoviesController";
import { GetAllMoviesUseCase } from "./getAllMoviesUseCase";

const prismaMovieRepository = new PrismaMovieRepository(prisma);
const getAllMoviesUseCase = new GetAllMoviesUseCase(prismaMovieRepository);
const getAllMoviesController = new GetAllMoviesController(getAllMoviesUseCase);

export { getAllMoviesController, getAllMoviesUseCase };
