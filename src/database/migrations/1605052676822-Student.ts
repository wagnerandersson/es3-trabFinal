import { MigrationInterface, QueryRunner } from 'typeorm';

export default class Student1605052676822 implements MigrationInterface {
  name = 'Student1605052676822';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "student" ADD "email" character varying NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "student" DROP COLUMN "email"`);
  }
}
