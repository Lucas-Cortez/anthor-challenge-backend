import { prisma } from "../../../infra/database";
import { BCryptHashProvider } from "../../../providers/implementations/BcryptHashProvider";
import { PrismaUserRepository } from "../../../repositories/implementations/PrismaUserRepository";
import { CreateUserController } from "./createUserController";
import { CreateUserUseCase } from "./createUserUseCase";

const prismaUserRepository = new PrismaUserRepository(prisma);
const bcryptHashProvider = new BCryptHashProvider();
const createUserUseCase = new CreateUserUseCase(prismaUserRepository, bcryptHashProvider);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserController, createUserUseCase };
