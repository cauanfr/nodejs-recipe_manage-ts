import { z } from "zod";
import { ingredientCreateSchema } from "../schemas";
import { Repository } from "typeorm";
import { Ingredient } from "../entities";

type IngredientCreate = z.infer<typeof ingredientCreateSchema>;

type IngredientRepo = Repository<Ingredient>;

export { IngredientRepo, IngredientCreate };
