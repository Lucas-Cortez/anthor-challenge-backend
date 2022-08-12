"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllMoviesUseCase = void 0;
class GetAllMoviesUseCase {
    prismaMovieRepository;
    constructor(prismaMovieRepository) {
        this.prismaMovieRepository = prismaMovieRepository;
    }
    async execute() {
        return await this.prismaMovieRepository.findAll();
    }
}
exports.GetAllMoviesUseCase = GetAllMoviesUseCase;
//# sourceMappingURL=GetAllMoviesUseCase.js.map