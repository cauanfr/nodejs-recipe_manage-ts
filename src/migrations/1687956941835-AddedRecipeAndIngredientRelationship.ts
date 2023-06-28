import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedRecipeAndIngredientRelationship1687956941835 implements MigrationInterface {
    name = 'AddedRecipeAndIngredientRelationship1687956941835'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ingredients_recipes" ADD "recipeId" integer`);
        await queryRunner.query(`ALTER TABLE "ingredients_recipes" ADD "ingredientId" integer`);
        await queryRunner.query(`ALTER TABLE "ingredients_recipes" ADD CONSTRAINT "FK_738dc9037c4b46cd604be9ca7b7" FOREIGN KEY ("recipeId") REFERENCES "recipes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ingredients_recipes" ADD CONSTRAINT "FK_916fe445ef09b05823312be7667" FOREIGN KEY ("ingredientId") REFERENCES "ingredients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ingredients_recipes" DROP CONSTRAINT "FK_916fe445ef09b05823312be7667"`);
        await queryRunner.query(`ALTER TABLE "ingredients_recipes" DROP CONSTRAINT "FK_738dc9037c4b46cd604be9ca7b7"`);
        await queryRunner.query(`ALTER TABLE "ingredients_recipes" DROP COLUMN "ingredientId"`);
        await queryRunner.query(`ALTER TABLE "ingredients_recipes" DROP COLUMN "recipeId"`);
    }

}
