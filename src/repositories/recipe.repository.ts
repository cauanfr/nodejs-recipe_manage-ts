import { AppDataSource } from "../data-source";
import { Recipe } from "../entities";

export default AppDataSource.getRepository(Recipe);
