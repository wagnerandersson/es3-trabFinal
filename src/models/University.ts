import { Column, Entity } from 'typeorm';
import Identifier from './Identifier';
import CreatedUpdated from './CreatedUpdated';

@Entity('university')
export default class University {
  @Column(type => Identifier)
  identification: Identifier;

  @Column(type => CreatedUpdated)
  created: CreatedUpdated;

  @Column()
  graduations: string;

  @Column()
  doctors: string;

  @Column()
  masters: string;
}
