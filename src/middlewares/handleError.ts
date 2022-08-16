import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";

async function errorHandler(error: AppError, request: Request, response: Response, next: NextFunction) {
  console.log(error.message);

  return response.status(error.statusCode || 500).json({
    status: "Error",
    message: error.message || "Unexpected error",
  });
}

export { errorHandler };
