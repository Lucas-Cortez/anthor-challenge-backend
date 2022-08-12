"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movieRoutes = void 0;
const express_1 = require("express");
const getAllMovies_1 = require("../useCases/movie/getAllMovies");
const getMovies_1 = require("../useCases/movie/getMovies");
const movieRoutes = (0, express_1.Router)();
exports.movieRoutes = movieRoutes;
movieRoutes.get("/all", (req, res) => getAllMovies_1.getAllMoviesController.handle(req, res));
movieRoutes.get("/", (req, res) => getMovies_1.getMoviesController.handle(req, res));
//# sourceMappingURL=movieRoutes.js.map