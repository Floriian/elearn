import { IsNumberString, IsOptional } from 'class-validator';

export class ClassQueryDto {
  @IsOptional()
  @IsNumberString()
  page: number;
}
