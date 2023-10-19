import { Course } from 'src/courses/entities/course.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
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
}
