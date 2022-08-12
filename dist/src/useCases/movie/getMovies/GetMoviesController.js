"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMoviesController = void 0;
class GetMoviesController {
    getMoviesUseCase;
    constructor(getMoviesUseCase) {
        this.getMoviesUseCase = getMoviesUseCase;
    }
    async handle(request, response) {
        const { offset, limit } = request.query;
        const offsetAux = typeof offset === "string" ? parseInt(offset) : 0;
        const limitAux = typeof limit === "string" ? parseInt(limit) : 10;
        const data = await this.getMoviesUseCase.execute({ offset: offsetAux, limit: limitAux });
        return response.status(200).json(data);
    }
}
exports.GetMoviesController = GetMoviesController;
//# sourceMappingURL=GetMoviesController.js.map