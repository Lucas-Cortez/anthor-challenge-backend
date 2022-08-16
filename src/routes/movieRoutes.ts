import { Router } from "express";
import { createMovieAvaliationController } from "../useCases/avaliation/createMovieAvaliation";
import { getMovieAvaliationsController } from "../useCases/avaliation/getMovieAvaliations";
import { createCommentController } from "../useCases/comment/createComment";
import { createMovieController } from "../useCases/movie/createMovie";
import { deleteMovieController } from "../useCases/movie/deleteMovie";
import { getAllMoviesController } from "../useCases/movie/getAllMovies";
import { updateMovieController } from "../useCases/movie/updateMovie";

const movieRoutes = Router();

movieRoutes.get("/", (req, res) => getAllMoviesController.handle(req, res));
movieRoutes.post("/", (req, res) => createMovieController.handle(req, res));
movieRoutes.put("/:movie_id", (req, res) => updateMovieController.handle(req, res));
movieRoutes.delete("/:movie_id", (req, res) => deleteMovieController.handle(req, res));

movieRoutes.get("/:movie_id/avaliation", (req, res) => getMovieAvaliationsController.handle(req, res));
movieRoutes.post("/:movie_id/avaliation", (req, res) => createMovieAvaliationController.handle(req, res));

movieRoutes.post("/:avaliation_id/comment", (req, res) => createCommentController.handle(req, res));

export { movieRoutes };
