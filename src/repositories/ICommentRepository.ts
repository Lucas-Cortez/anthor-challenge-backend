import { Comment } from "@prisma/client";
import { ICreateCommentDTO } from "../useCases/comment/createComment/ICreateCommentDTO";

export interface ICommentRepository {
  create(comment: ICreateCommentDTO): Promise<Comment>;
}
