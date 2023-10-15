import { Match } from '@/decorators';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class SignUpDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    name: 'username',
    type: String,
  })
  username: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    name: 'email',
    type: String,
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @IsStrongPassword({
    minLength: 6,
    minSymbols: 0,
    minUppercase: 1,
  })
  @ApiProperty({
    name: 'password',
    type: String,
  })
  password: string;

  @IsString()
  @IsNotEmpty()
  @IsStrongPassword({
    minLength: 6,
    minSymbols: 0,
    minUppercase: 1,
  })
  @ApiProperty({
    name: 'confirmPassowrd',
    type: String,
  })
  @Match('password')
  confirmPassword: string;
}
