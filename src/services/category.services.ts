import { Category } from "../entities";
import { CategoryCreate } from "../interfaces";
import { categoryRepository } from "../repositories";

const create = async (payload: CategoryCreate): Promise<Category> => {
  const category: Category = categoryRepository.create(payload);
  await categoryRepository.save(category);

  return category;
};

export default { create };
