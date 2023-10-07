import 'reflect-metadata';
import { Course } from '@/course/entity/course.entity';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Repository,
} from 'typeorm';

/**
 * Represents a user entity in the database.
 */
@Entity()
export class User {
  /**
   * The unique database ID of the user.
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * The email address associated with the user, received from Auth0.
   */
  @Column()
  email: string;

  /**
   * The user's invite code, which can be null. If null, the user can't access the app.
   */
  @Column({ nullable: true })
  code: string | null;

  /**
   * The Auth0 sub (subject) identifier associated with the user.
   */
  @Column()
  sub: string;

  @OneToMany(() => Course, (course) => course.createdBy)
  courses: Course[];
}

export type UserRepository = Repository<User>;
