import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import Lesson from './Lesson';

@Entity('content')
export default class Content {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(type => Lesson, content => Content)
  @JoinColumn()
  Lesson: Lesson;

  @Column()
  description: string;

  @Column()
  linkContent: string;
}
