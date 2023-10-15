import { Controller, Get, UseGuards } from '@nestjs/common';
import { CourseService } from './course.service';
import { JwtGuard } from '@/guards';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}
}
