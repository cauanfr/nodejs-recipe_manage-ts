import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./User.entity";
import { Category } from "./Category.entity";
import { IngredientsRecipes } from "./IngredientsRecipes.entity";
import { Ingredient } from "./Ingredient.entity";

@Entity("recipes")
export class Recipe {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 150 })
  name: string;

  @Column({ type: "text" })
  details: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @UpdateDateColumn({ type: "date" })
  updatedAt: string;

  @DeleteDateColumn({ type: "date" })
  deletedAt: string | null;

  @ManyToOne(() => User, (u) => u.recipes)
  user: User;

  @ManyToMany(() => Category)
  @JoinTable()
  categories: Array<Category>;

  @OneToMany(() => IngredientsRecipes, (ir) => ir.recipe)
  ingredientsRecipes: Array<IngredientsRecipes>;
}
