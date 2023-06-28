import { Request, Response } from "express";
import { categoryServices } from "../services";
import { Category } from "../entities";

const create = async (req: Request, res: Response): Promise<Response> => {
  const category: Category = await categoryServices.create(req.body);
  return res.status(201).json(category);
};

export default { create };
