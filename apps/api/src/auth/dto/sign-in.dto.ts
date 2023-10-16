import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class SignInDto {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @ApiProperty({
    title: 'email',
    description: "User's email.",
  })
  email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    title: 'password',
    description: "User's password.",
  })
  password: string;
}
