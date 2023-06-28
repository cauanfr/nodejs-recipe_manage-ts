import { Ingredient } from "../entities";
import { IngredientCreate } from "../interfaces";
import { ingredientRepository } from "../repositories";

const create = async (payload: IngredientCreate): Promise<Ingredient> => {
  const ingredient: Ingredient = ingredientRepository.create(payload);
  await ingredientRepository.save(ingredient);

  return ingredient;
};

export default { create };
