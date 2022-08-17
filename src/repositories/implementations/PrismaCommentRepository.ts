import { Comment, PrismaClient } from "@prisma/client";
import { ICreateCommentDTO } from "../../useCases/comment/createComment/ICreateCommentDTO";
import { ICommentRepository } from "../ICommentRepository";

export class PrismaCommentRepository implements ICommentRepository {
  constructor(private prismaClient: PrismaClient) {}

  public async create(comment: ICreateCommentDTO): Promise<Comment> {
    return await this.prismaClient.comment.create({ data: comment });
  }

  public async findByAvaliationId(avaliation_id: number): Promise<Comment[]> {
    return await this.prismaClient.comment.findMany({ where: { avaliation_id: avaliation_id } });
  }
}
