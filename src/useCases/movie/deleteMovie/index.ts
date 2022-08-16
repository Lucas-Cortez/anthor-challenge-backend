import { prisma } from "../../../infra/database";
import { PrismaMovieRepository } from "../../../repositories/implementations/PrismaMovieRepository";
import { DeleteMovieController } from "./DeleteMovieController";
import { DeleteMovieUseCase } from "./DeleteMovieUseCase";

const prismaMovieRepository = new PrismaMovieRepository(prisma);
const deleteMovieUseCase = new DeleteMovieUseCase(prismaMovieRepository);
const deleteMovieController = new DeleteMovieController(deleteMovieUseCase);

export { deleteMovieController, deleteMovieUseCase };
