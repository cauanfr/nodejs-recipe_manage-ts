import { z } from "zod";

const categorySchema = z.object({
  id: z.number().positive(),
  name: z.string().max(150).toLowerCase(),
});

const categoryCreateSchema = categorySchema.omit({ id: true });

export { categorySchema, categoryCreateSchema };
