import { NextFunction, Request, Response } from "express";
import { Ingredient } from "../entities";
import { ingredientRepository } from "../repositories";
import { AppError } from "../errors";

export const uniqueIngredient = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const name: string = req.body.name;
  if (!name) return next();

  const foundEntity: Ingredient | null = await ingredientRepository.findOneBy({ name });
  if (foundEntity) throw new AppError("Ingredient already exists", 409);

  return next();
};
