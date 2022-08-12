"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMoviesUseCase = exports.getMoviesController = void 0;
const database_1 = require("../../../infra/database");
const PrismaMovieRepository_1 = require("../../../repositories/implementations/PrismaMovieRepository");
const GetMoviesController_1 = require("./GetMoviesController");
const GetMoviesUseCase_1 = require("./GetMoviesUseCase");
const prismaMovieRepository = new PrismaMovieRepository_1.PrismaMovieRepository(database_1.prisma);
const getMoviesUseCase = new GetMoviesUseCase_1.GetMoviesUseCase(prismaMovieRepository);
exports.getMoviesUseCase = getMoviesUseCase;
const getMoviesController = new GetMoviesController_1.GetMoviesController(getMoviesUseCase);
exports.getMoviesController = getMoviesController;
//# sourceMappingURL=index.js.map