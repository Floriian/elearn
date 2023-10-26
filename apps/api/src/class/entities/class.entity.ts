import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  Repository,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Class {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  title: string;

  @Column({ generated: 'uuid' })
  inviteCode: string;

  @ManyToMany(() => User, (user) => user.classes)
  users: User[];

  @ManyToOne(() => User, (user) => user.classes)
  teachers: User[];

  @ApiProperty({
    title: 'createdAt',
    type: Date,
  })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({
    title: 'updatedAt',
    type: Date,
  })
  @UpdateDateColumn()
  updatedAt: Date;
}

export type ClassRepository = Repository<Class>;
