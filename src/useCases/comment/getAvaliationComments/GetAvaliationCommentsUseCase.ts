import { Comment } from "@prisma/client";
import { ICommentRepository } from "../../../repositories/ICommentRepository";

export class GetAvaliationCommentsUseCase {
  constructor(private commentRepository: ICommentRepository) {}

  public async execute(avaliation_id: number): Promise<Comment[]> {
    return await this.commentRepository.findByAvaliationId(avaliation_id);
  }
}
