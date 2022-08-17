import { Comment } from "@prisma/client";
import { ICreateCommentDTO } from "../useCases/comment/createComment/ICreateCommentDTO";

export interface ICommentRepository {
  findByAvaliationId(avaliation_id: number): Promise<Comment[]>;

  create(comment: ICreateCommentDTO): Promise<Comment>;
}
