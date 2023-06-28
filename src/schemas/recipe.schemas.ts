import { z } from "zod";
import { userReturnSchema, userSchema } from "./user.schemas";
import { categoryCreateSchema, categorySchema } from "./category.schemas";
import { ingredientCreateSchema, ingredientSchema } from "./ingredient.schemas";
import {
  ingredientRecipesCreateSchema,
  ingredientRecipesSchema,
} from "./ingredientRecipes.schemas";

const recipeSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(150),
  details: z.string(),
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
  deletedAt: z.string().or(z.date()).nullable(),
  user: userSchema,
  categories: categorySchema.array(),
  ingredients: ingredientSchema.array(),
});

const recipeCreateSchema = recipeSchema
  .omit({
    id: true,
    user: true,
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
  })
  .extend({
    categories: categoryCreateSchema.array(),
    ingredients: ingredientRecipesCreateSchema.array(),
  });

const recipeReturnSchema = recipeSchema.extend({
  user: userReturnSchema,
  ingredients: ingredientSchema.nullish(),
});

export { recipeSchema, recipeCreateSchema, recipeReturnSchema };
