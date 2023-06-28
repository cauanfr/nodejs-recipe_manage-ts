import { z } from "zod";
import { recipeCreateSchema, recipeReturnSchema } from "../schemas";
import { DeepPartial, Repository } from "typeorm";
import { Recipe } from "../entities";

type RecipeCreate = z.infer<typeof recipeCreateSchema>;
type RecipeReturn = z.infer<typeof recipeReturnSchema>;

type RecipeRepo = Repository<Recipe>;

export { RecipeCreate, RecipeReturn, RecipeRepo };
