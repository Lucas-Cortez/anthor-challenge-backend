import { Comment } from "@prisma/client";
import { ICommentRepository } from "../../../repositories/ICommentRepository";
import { ICreateCommentDTO } from "./ICreateCommentDTO";

export class CreateCommentUseCase {
  constructor(private commentRepository: ICommentRepository) {}

  public async execute(comment: ICreateCommentDTO): Promise<Comment> {
    return await this.commentRepository.create(comment);
  }
}
