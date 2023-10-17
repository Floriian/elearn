import { ApiProperty } from '@nestjs/swagger';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Repository,
} from 'typeorm';
import * as argon from 'argon2';
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

  @BeforeInsert()
  @BeforeUpdate()
  private async hash() {
    const hash = await argon.hash(this.password);
    this.password = hash;

    if (this.refreshToken) {
      const tokenHash = await argon.hash(this.refreshToken);
      this.refreshToken = tokenHash;
    }
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