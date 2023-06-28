import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedRecipeAndCategoryRelationship1687955263959 implements MigrationInterface {
    name = 'AddedRecipeAndCategoryRelationship1687955263959'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "categories" ("id" SERIAL NOT NULL, "name" character varying(150) NOT NULL, CONSTRAINT "UQ_8b0be371d28245da6e4f4b61878" UNIQUE ("name"), CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "ingredients" ("id" SERIAL NOT NULL, "name" character varying(150) NOT NULL, CONSTRAINT "UQ_a955029b22ff66ae9fef2e161f8" UNIQUE ("name"), CONSTRAINT "PK_9240185c8a5507251c9f15e0649" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "ingredients_recipes" ("id" SERIAL NOT NULL, "details" text NOT NULL, CONSTRAINT "PK_04949596650635a24b6e3d259ff" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "recipes_categories_categories" ("recipesId" integer NOT NULL, "categoriesId" integer NOT NULL, CONSTRAINT "PK_236c9488ebb8bec47899da6fecb" PRIMARY KEY ("recipesId", "categoriesId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_51cda7b2eeaaeed2934ec1433c" ON "recipes_categories_categories" ("recipesId") `);
        await queryRunner.query(`CREATE INDEX "IDX_e283cc294b2ba58f84f83f5874" ON "recipes_categories_categories" ("categoriesId") `);
        await queryRunner.query(`ALTER TABLE "recipes" DROP COLUMN "category"`);
        await queryRunner.query(`ALTER TABLE "recipes_categories_categories" ADD CONSTRAINT "FK_51cda7b2eeaaeed2934ec1433c2" FOREIGN KEY ("recipesId") REFERENCES "recipes"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "recipes_categories_categories" ADD CONSTRAINT "FK_e283cc294b2ba58f84f83f58743" FOREIGN KEY ("categoriesId") REFERENCES "categories"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "recipes_categories_categories" DROP CONSTRAINT "FK_e283cc294b2ba58f84f83f58743"`);
        await queryRunner.query(`ALTER TABLE "recipes_categories_categories" DROP CONSTRAINT "FK_51cda7b2eeaaeed2934ec1433c2"`);
        await queryRunner.query(`ALTER TABLE "recipes" ADD "category" character varying(100) NOT NULL`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e283cc294b2ba58f84f83f5874"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_51cda7b2eeaaeed2934ec1433c"`);
        await queryRunner.query(`DROP TABLE "recipes_categories_categories"`);
        await queryRunner.query(`DROP TABLE "ingredients_recipes"`);
        await queryRunner.query(`DROP TABLE "ingredients"`);
        await queryRunner.query(`DROP TABLE "categories"`);
    }

}
