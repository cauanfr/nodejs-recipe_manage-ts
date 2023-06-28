import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedUniqueColumns1687934385791 implements MigrationInterface {
    name = 'AddedUniqueColumns1687934385791'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categories" ADD CONSTRAINT "UQ_8b0be371d28245da6e4f4b61878" UNIQUE ("name")`);
        await queryRunner.query(`ALTER TABLE "ingredients" ADD CONSTRAINT "UQ_a955029b22ff66ae9fef2e161f8" UNIQUE ("name")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ingredients" DROP CONSTRAINT "UQ_a955029b22ff66ae9fef2e161f8"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP CONSTRAINT "UQ_8b0be371d28245da6e4f4b61878"`);
    }

}
