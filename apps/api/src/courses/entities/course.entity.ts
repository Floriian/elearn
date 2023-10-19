import { ApiProperty } from '@nestjs/swagger';
import { Class } from 'src/class/entities/class.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
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

  @OneToMany(() => Class, (c) => c.course)
  class: Class;
}
