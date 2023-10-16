import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsStrongPassword } from 'class-validator';
import { Match } from 'src/decorators';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    title: 'email',
    type: String,
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @IsStrongPassword({
    minLength: 6,
    minNumbers: 1,
    minUppercase: 0,
    minSymbols: 0,
  })
  @ApiProperty({
    title: 'password',
    type: String,
  })
  password: string;

  @IsString()
  @IsNotEmpty()
  @IsStrongPassword({
    minLength: 6,
    minNumbers: 1,
    minUppercase: 0,
    minSymbols: 0,
  })
  @Match(CreateUserDto, (s) => s.confirmPassword)
  @ApiProperty({ title: 'confirmPassword', type: String })
  confirmPassword: string;
}
