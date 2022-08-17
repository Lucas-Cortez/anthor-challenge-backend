import { Comment } from "@prisma/client";
import { ICommentRepository } from "../../../repositories/ICommentRepository";

export class GetAvaliationCommentsUseCase {
    constructor(private commentRepository: ICommentRepository) {}
    
    public async execute(): Promise<Comment[]> {
      return await this.commentRepository.
    }
}

