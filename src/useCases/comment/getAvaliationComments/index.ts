import { prisma } from "../../../infra/database";
import { PrismaCommentRepository } from "../../../repositories/implementations/PrismaCommentRepository";
import { GetAvaliationCommentsController } from "./GetAvaliationCommentsController";
import { GetAvaliationCommentsUseCase } from "./GetAvaliationCommentsUseCase";

const prismaCommentRepository = new PrismaCommentRepository(prisma);
const getAvaliationCommentsUseCase = new GetAvaliationCommentsUseCase(prismaCommentRepository);
const getAvaliationCommentsController = new GetAvaliationCommentsController(getAvaliationCommentsUseCase);

export { getAvaliationCommentsController, getAvaliationCommentsUseCase };
