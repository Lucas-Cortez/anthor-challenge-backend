"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const movieRoutes_1 = require("./movieRoutes");
const routes = (0, express_1.Router)();
exports.routes = routes;
routes.use("/movie", movieRoutes_1.movieRoutes);
//# sourceMappingURL=index.js.map