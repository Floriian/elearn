import { ApiProperty } from '@nestjs/swagger';
import { Course } from 'src/courses/entities/course.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Class {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ generated: 'uuid' })
  inviteCode: string;

  @ManyToMany(() => User)
  @JoinTable()
  users: User[];

  @ManyToOne(() => Course, (course) => course.class)
  course: Course[];

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
