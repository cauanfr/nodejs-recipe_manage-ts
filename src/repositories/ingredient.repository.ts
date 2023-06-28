import { AppDataSource } from "../data-source";
import { Ingredient } from "../entities";

export default AppDataSource.getRepository(Ingredient);
