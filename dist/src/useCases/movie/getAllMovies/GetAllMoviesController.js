"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllMoviesController = void 0;
class GetAllMoviesController {
    getAllMoviesUseCase;
    constructor(getAllMoviesUseCase) {
        this.getAllMoviesUseCase = getAllMoviesUseCase;
    }
    async handle(request, response) {
        const data = await this.getAllMoviesUseCase.execute();
        return response.status(200).json(data);
    }
}
exports.GetAllMoviesController = GetAllMoviesController;
//# sourceMappingURL=GetAllMoviesController.js.map