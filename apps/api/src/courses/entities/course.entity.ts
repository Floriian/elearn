import { ApiProperty } from '@nestjs/swagger';
import { Class } from 'src/class/entities/class.entity';
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
  Repository,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Course {
  @ApiProperty({
    description: 'Course ID',
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: 'Course title.',
  })
  @Column()
  title: string;

  @ApiProperty({
    description: 'Course description',
  })
  @Column()
  description: string;

  @OneToMany(() => Class, (c) => c.course)
  class: Class;

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
export type CourseRepository = Repository<Course>;
