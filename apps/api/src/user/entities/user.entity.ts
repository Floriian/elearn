import { ApiProperty } from '@nestjs/swagger';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  Repository,
} from 'typeorm';
import * as argon from 'argon2';
import { Roles } from 'src/user/entities/roles';
import { Class } from 'src/class/entities/class.entity';
@Entity()
export class User {
  @ApiProperty({
    description: 'User ID',
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: "User's email. This is used only in authentication.",
  })
  @Column({ unique: true })
  email: string;

  @ApiProperty({
    description: 'Role.',
  })
  @Column({ default: Roles.MEMBER })
  role: Roles;

  @BeforeInsert()
  @BeforeUpdate()
  private async hash() {
    const hash = await argon.hash(this.password);
    this.password = hash;
  }

  @ApiProperty({
    description: "User's password. It is hashed when creating an user.",
  })
  @Column()
  password: string;

  @Column({ nullable: true })
  refreshToken: string;
}

export type UserRepository = Repository<User>;
