import { Column, PrimaryGeneratedColumn } from 'typeorm';

// @Entity('institution')
export default class Identifier {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  cnpj: string;
}
