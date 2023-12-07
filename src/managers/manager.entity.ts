import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Manager {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  fullName: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true, default: 'bektur@gmail.com' })
  email: string;

  @CreateDateColumn({ nullable: true })
  creationDate: Date;

  @Column({ nullable: true, default: '123456' })
  password?: string;
}
