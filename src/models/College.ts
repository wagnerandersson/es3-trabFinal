import { Column, Entity } from 'typeorm';

import Identifier from './Identifier';

@Entity('college')
export default class College {
  @Column(type => Identifier)
  identification: Identifier;

  @Column()
  graduations: string;
}
