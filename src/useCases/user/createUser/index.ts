import { prisma } from "../../../infra/database";
import { BCryptHashProvider } from "../../../providers/implementations/BcryptHashProvider";
import { PrismaUserRepository } from "../../../repositories/implementations/PrismaUserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const prismaUserRepository = new PrismaUserRepository(prisma);
const bcryptHashProvider = new BCryptHashProvider();
const createUserUseCase = new CreateUserUseCase(prismaUserRepository, bcryptHashProvider);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserController, createUserUseCase };
