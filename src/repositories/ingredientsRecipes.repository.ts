import { AppDataSource } from "../data-source";
import { IngredientsRecipes } from "../entities";

export default AppDataSource.getRepository(IngredientsRecipes);
