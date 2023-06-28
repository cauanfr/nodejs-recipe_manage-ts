import { MigrationInterface, QueryRunner } from "typeorm";

export class RelationshipsAdded1687931508012 implements MigrationInterface {
    name = 'RelationshipsAdded1687931508012'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "ingredients_recipes" ("id" SERIAL NOT NULL, "details" text NOT NULL, "recipeId" integer, "ingredientId" integer, CONSTRAINT "PK_04949596650635a24b6e3d259ff" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "recipes_categories_categories" ("recipesId" integer NOT NULL, "categoriesId" integer NOT NULL, CONSTRAINT "PK_236c9488ebb8bec47899da6fecb" PRIMARY KEY ("recipesId", "categoriesId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_51cda7b2eeaaeed2934ec1433c" ON "recipes_categories_categories" ("recipesId") `);
        await queryRunner.query(`CREATE INDEX "IDX_e283cc294b2ba58f84f83f5874" ON "recipes_categories_categories" ("categoriesId") `);
        await queryRunner.query(`ALTER TABLE "ingredients_recipes" ADD CONSTRAINT "FK_738dc9037c4b46cd604be9ca7b7" FOREIGN KEY ("recipeId") REFERENCES "recipes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ingredients_recipes" ADD CONSTRAINT "FK_916fe445ef09b05823312be7667" FOREIGN KEY ("ingredientId") REFERENCES "ingredients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "recipes_categories_categories" ADD CONSTRAINT "FK_51cda7b2eeaaeed2934ec1433c2" FOREIGN KEY ("recipesId") REFERENCES "recipes"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "recipes_categories_categories" ADD CONSTRAINT "FK_e283cc294b2ba58f84f83f58743" FOREIGN KEY ("categoriesId") REFERENCES "categories"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "recipes_categories_categories" DROP CONSTRAINT "FK_e283cc294b2ba58f84f83f58743"`);
        await queryRunner.query(`ALTER TABLE "recipes_categories_categories" DROP CONSTRAINT "FK_51cda7b2eeaaeed2934ec1433c2"`);
        await queryRunner.query(`ALTER TABLE "ingredients_recipes" DROP CONSTRAINT "FK_916fe445ef09b05823312be7667"`);
        await queryRunner.query(`ALTER TABLE "ingredients_recipes" DROP CONSTRAINT "FK_738dc9037c4b46cd604be9ca7b7"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e283cc294b2ba58f84f83f5874"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_51cda7b2eeaaeed2934ec1433c"`);
        await queryRunner.query(`DROP TABLE "recipes_categories_categories"`);
        await queryRunner.query(`DROP TABLE "ingredients_recipes"`);
    }

}
