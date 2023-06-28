import { z } from "zod";

const ingredientSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(150).toLowerCase(),
});

const ingredientCreateSchema = ingredientSchema.omit({ id: true });

export { ingredientSchema, ingredientCreateSchema };
