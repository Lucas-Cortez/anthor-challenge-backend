"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMoviesUseCase = void 0;
class GetMoviesUseCase {
    prismaMovieRepository;
    constructor(prismaMovieRepository) {
        this.prismaMovieRepository = prismaMovieRepository;
    }
    async execute(pagination) {
        return await this.prismaMovieRepository.findPaginated(pagination);
    }
}
exports.GetMoviesUseCase = GetMoviesUseCase;
//# sourceMappingURL=GetMoviesUseCase.js.map