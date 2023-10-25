import { PartialType } from '@nestjs/swagger';
import { CreateClassDto } from './create-class.dto';
import { IsNumber, IsOptional } from 'class-validator';

export class UpdateClassDto extends PartialType(CreateClassDto) {
  @IsOptional()
  @IsNumber()
  id: number;
}
