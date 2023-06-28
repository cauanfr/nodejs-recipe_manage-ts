import { Request, Response } from "express";
import { ingredientServices } from "../services";
import { Ingredient } from "../entities";

const create = async (req: Request, res: Response): Promise<Response> => {
  const ingredient: Ingredient = await ingredientServices.create(req.body);
  return res.status(201).json(ingredient);
};

export default { create };
