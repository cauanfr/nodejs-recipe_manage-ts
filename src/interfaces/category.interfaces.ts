import { z } from "zod";
import { categoryCreateSchema } from "../schemas";
import { Repository } from "typeorm";
import { Category } from "../entities";

type CategoryCreate = z.infer<typeof categoryCreateSchema>;

type CategoryRepo = Repository<Category>;

export { CategoryRepo, CategoryCreate };
