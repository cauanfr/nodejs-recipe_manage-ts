import { Request, Response } from "express";
import { recipeServices } from "../services";
import { RecipeReturn } from "../interfaces";

const create = async (req: Request, res: Response): Promise<Response> => {
  const userId: number = Number(res.locals.decoded.sub);
  const recipe: RecipeReturn = await recipeServices.create(req.body, userId);

  return res.status(201).json(recipe);
};

export default { create };
