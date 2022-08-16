import { Router } from "express";
import { movieRoutes } from "./movieRoutes";
import { userRoutes } from "./userRoutes";

const routes = Router();

routes.use("/movie", movieRoutes);
routes.use("/user", userRoutes);

export { routes };
