import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Recipe } from "./Recipe.entity";
import { Ingredient } from "./Ingredient.entity";

@Entity("ingredients_recipes")
export class IngredientsRecipes {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "text" })
  details: string;

  @ManyToOne(() => Recipe, (r) => r.ingredientsRecipes)
  recipe: Recipe;

  @ManyToOne(() => Ingredient, (i) => i.ingredientsRecipes)
  ingredient: Ingredient;
}
