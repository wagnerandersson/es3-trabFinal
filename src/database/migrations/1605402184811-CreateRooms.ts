import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateRooms1605402184811 implements MigrationInterface {
    name = 'CreateRooms1605402184811'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "rooms" ("number" SERIAL NOT NULL, "classHour" integer NOT NULL, "roomId" uuid, "createdCreated_at" TIMESTAMP NOT NULL DEFAULT now(), "createdUpdated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_82a975f8999493b4cf1fbd9f880" PRIMARY KEY ("number"))`);
        await queryRunner.query(`ALTER TABLE "lesson" DROP COLUMN "updated_At"`);
        await queryRunner.query(`ALTER TABLE "lesson" DROP COLUMN "created_At "`);
        await queryRunner.query(`ALTER TABLE "college" DROP COLUMN "identificationUpdated_at"`);
        await queryRunner.query(`ALTER TABLE "college" DROP COLUMN "identificationCreated_at"`);
        await queryRunner.query(`ALTER TABLE "student" DROP COLUMN "updated_At"`);
        await queryRunner.query(`ALTER TABLE "student" DROP COLUMN "created_At"`);
        await queryRunner.query(`ALTER TABLE "university" DROP COLUMN "identificationUpdated_at"`);
        await queryRunner.query(`ALTER TABLE "university" DROP COLUMN "identificationCreated_at"`);
        await queryRunner.query(`ALTER TABLE "lesson" ADD "createdCreated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "lesson" ADD "createdUpdated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "student" ADD "createdCreated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "student" ADD "createdUpdated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "university" ADD "createdCreated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "university" ADD "createdUpdated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "rooms" ADD CONSTRAINT "FK_31962cf242c2fdc6889493d9a99" FOREIGN KEY ("roomId") REFERENCES "class"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rooms" DROP CONSTRAINT "FK_31962cf242c2fdc6889493d9a99"`);
        await queryRunner.query(`ALTER TABLE "university" DROP COLUMN "createdUpdated_at"`);
        await queryRunner.query(`ALTER TABLE "university" DROP COLUMN "createdCreated_at"`);
        await queryRunner.query(`ALTER TABLE "student" DROP COLUMN "createdUpdated_at"`);
        await queryRunner.query(`ALTER TABLE "student" DROP COLUMN "createdCreated_at"`);
        await queryRunner.query(`ALTER TABLE "lesson" DROP COLUMN "createdUpdated_at"`);
        await queryRunner.query(`ALTER TABLE "lesson" DROP COLUMN "createdCreated_at"`);
        await queryRunner.query(`ALTER TABLE "university" ADD "identificationCreated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "university" ADD "identificationUpdated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "student" ADD "created_At" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "student" ADD "updated_At" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "college" ADD "identificationCreated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "college" ADD "identificationUpdated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "lesson" ADD "created_At " TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "lesson" ADD "updated_At" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`DROP TABLE "rooms"`);
    }

}
