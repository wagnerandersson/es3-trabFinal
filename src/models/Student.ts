import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';

import {
  IsEmail,
  IsInt,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';
import Class from './Class';
import CreatedUpdated from './CreatedUpdated';

@Entity('student')
export default class Student {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @MaxLength(50, { message: 'Nome precisa ter no máximo 50 caracteres' })
  @MinLength(2, { message: 'Nome deve possuir no mínimo 1 caractere' })
  name: string;

  @Column()
  @Max(99999)
  @Min(10000)
  key: number;

  @Column()
  @IsEmail()
  email: string;

  @ManyToMany(type => Class)
  @JoinTable()
  classes: Class;

  @Column(type => CreatedUpdated)
  created: CreatedUpdated;
}
