import CreatedUpdated from './CreatedUpdated';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('rooms')
export default class Rooms {
  @PrimaryGeneratedColumn()
  number: number;

  @Column()
  classHour: number;

  @Column(type => CreatedUpdated)
  created: CreatedUpdated;
}
