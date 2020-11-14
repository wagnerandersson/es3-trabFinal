import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  ManyToOne,
} from 'typeorm';
import Content from './Content';
import Class from './Class';

@Entity('lesson')
export default class Lesson {
  @PrimaryGeneratedColumn('uuid')
  idAula: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @OneToOne(type => Content, lesson => Lesson)
  content: Content;

  // remete a Class
  @ManyToOne(type => Class, lessons => Lesson, { eager: true })
  classe: Class;

  @CreateDateColumn({ name: 'created_At ' })
  createAt: Date;

  @UpdateDateColumn({ name: 'updated_At' })
  updateAt: Date;
}
