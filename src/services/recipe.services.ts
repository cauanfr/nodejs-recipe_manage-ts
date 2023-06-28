import { Category, Ingredient, Recipe, User } from "../entities";
import { AppError } from "../errors";
import { RecipeCreate, RecipeReturn } from "../interfaces";
import {
  categoryRepository,
  ingredientRepository,
  ingredientsRecipesRepository,
  recipeRepository,
  userRepository,
} from "../repositories";
import { recipeReturnSchema, recipeSchema } from "../schemas";

const create = async (
  { categories, ingredients, ...payload }: RecipeCreate,
  userId: number
): Promise<RecipeReturn> => {
  const allCategories: Array<Category> = [];

  for await (const { name } of categories) {
    const foundCategory = await categoryRepository.findOneBy({ name });

    if (!foundCategory) {
      throw new AppError(`Invalid category: ${name}`, 404);
    } else {
      allCategories.push(foundCategory);
    }
  }

  const user: User = (await userRepository.findOneBy({ id: userId }))!;

  const recipe: Recipe = recipeRepository.create({
    ...payload,
    user,
    categories: allCategories,
  });

  await recipeRepository.save(recipe);

  for await (const { name, details } of ingredients) {
    const foundIngredient = await ingredientRepository.findOneBy({ name });

    if (!foundIngredient) {
      const ingredient: Ingredient = await ingredientRepository.save({ name });
      await ingredientsRecipesRepository.save({ details, ingredient, recipe });
    } else {
      await ingredientsRecipesRepository.save({
        details,
        ingredient: foundIngredient,
        recipe,
      });
    }
  }

  return recipeReturnSchema.parse(recipe);
};

export default { create };
