"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllMoviesUseCase = exports.getAllMoviesController = void 0;
const database_1 = require("../../../infra/database");
const PrismaMovieRepository_1 = require("../../../repositories/implementations/PrismaMovieRepository");
const GetAllMoviesController_1 = require("./GetAllMoviesController");
const GetAllMoviesUseCase_1 = require("./GetAllMoviesUseCase");
const prismaMovieRepository = new PrismaMovieRepository_1.PrismaMovieRepository(database_1.prisma);
const getAllMoviesUseCase = new GetAllMoviesUseCase_1.GetAllMoviesUseCase(prismaMovieRepository);
exports.getAllMoviesUseCase = getAllMoviesUseCase;
const getAllMoviesController = new GetAllMoviesController_1.GetAllMoviesController(getAllMoviesUseCase);
exports.getAllMoviesController = getAllMoviesController;
//# sourceMappingURL=index.js.map