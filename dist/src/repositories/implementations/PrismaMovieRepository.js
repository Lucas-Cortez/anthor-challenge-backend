"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaMovieRepository = void 0;
class PrismaMovieRepository {
    prismaClient;
    constructor(prismaClient) {
        this.prismaClient = prismaClient;
    }
    async findAll() {
        return await this.prismaClient.movie.findMany();
    }
    async findPaginated(pagination) {
        const { offset, limit } = pagination;
        return await this.prismaClient.movie.findMany({ skip: offset, take: limit });
    }
}
exports.PrismaMovieRepository = PrismaMovieRepository;
//# sourceMappingURL=PrismaMovieRepository.js.map