import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  ManyToOne,
} from 'typeorm';
import Content from './Content';
import Class from './Class';
import CreatedUpdated from './CreatedUpdated';

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

  @Column(type => CreatedUpdated)
  created: CreatedUpdated;
}
