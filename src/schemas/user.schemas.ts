import { z } from "zod";

const userSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(150),
  email: z.string().max(100).email(),
  password: z.string().max(150),
  admin: z.boolean().default(false),
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
  deletedAt: z.string().or(z.date()).nullable(),
});

const userCreateSchema = userSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});

const userReturnSchema = userSchema.omit({ password: true });
const userReadSchema = userReturnSchema.array();

const userUpdateSchema = userCreateSchema.omit({ admin: true }).partial();

export {
  userSchema,
  userCreateSchema,
  userUpdateSchema,
  userReturnSchema,
  userReadSchema,
};
