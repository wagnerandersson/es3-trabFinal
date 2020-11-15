import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export default class CreatedUpdated {
  @CreateDateColumn({ name: 'created_At' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_At' })
  updatedAt: Date;
}
