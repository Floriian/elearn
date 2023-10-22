import { IsNumberString } from 'class-validator';

export class CourseQueryDto {
  @IsNumberString()
  page: number;
}
