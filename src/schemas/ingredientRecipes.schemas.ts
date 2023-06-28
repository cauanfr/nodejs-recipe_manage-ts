import { z } from "zod";

const ingredientRecipesSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(150).toLowerCase(),
  details: z.string().toLowerCase(),
});

const ingredientRecipesCreateSchema = ingredientRecipesSchema.omit({ id: true });

export { ingredientRecipesSchema, ingredientRecipesCreateSchema };
