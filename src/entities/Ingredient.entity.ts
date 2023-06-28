import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { IngredientsRecipes } from "./IngredientsRecipes.entity";

@Entity("ingredients")
export class Ingredient {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 150, unique: true })
  name: string;

  @OneToMany(() => IngredientsRecipes, (ir) => ir.ingredient)
  ingredientRecipes: Array<IngredientsRecipes>;
}
