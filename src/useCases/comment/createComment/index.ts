import { prisma } from "../../../infra/database";
import { PrismaCommentRepository } from "../../../repositories/implementations/PrismaCommentRepository";
import { CreateCommentController } from "./CreateCommentController";
import { CreateCommentUseCase } from "./CreateCommentUseCase";

const prismaCommentRepository = new PrismaCommentRepository(prisma);
const createCommentUseCase = new CreateCommentUseCase(prismaCommentRepository);
const createCommentController = new CreateCommentController(createCommentUseCase);

export { createCommentController, createCommentUseCase };
