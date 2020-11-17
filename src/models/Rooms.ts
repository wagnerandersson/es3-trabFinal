import CreatedUpdated from './CreatedUpdated';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Class from './Class';
import { Min } from 'class-validator';

@Entity('rooms')
export default class Rooms {
  @PrimaryGeneratedColumn()
  @Min(1)
  number: number;

  @Column()
  classHour: number;

  @Column(type => CreatedUpdated)
  created: CreatedUpdated;

  // remete a Class
  @ManyToOne(type => Class, room => Rooms, { eager: true })
  room: Rooms;
}
