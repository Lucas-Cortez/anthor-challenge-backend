import { prisma } from "../../../infra/database";
import { PrismaMovieRepository } from "../../../repositories/implementations/PrismaMovieRepository";
import { UpdateMovieController } from "./UpdateMovieController";
import { UpdateMovieUseCase } from "./UpdateMovieUseCase";

const prismaMovieRepository = new PrismaMovieRepository(prisma);
const updateMovieUseCase = new UpdateMovieUseCase(prismaMovieRepository);
const updateMovieController = new UpdateMovieController(updateMovieUseCase);

export { updateMovieController, updateMovieUseCase };
