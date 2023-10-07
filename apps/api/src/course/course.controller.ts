import { Controller, Get, UseGuards } from '@nestjs/common';
import { CourseService } from './course.service';
import { JwtGuard } from '@/guards';
import { GetUser } from '@/decorators/getuser.decorator';
import { Auth0Payload } from '@/types';

@UseGuards(JwtGuard)
@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get()
  getCourses(@GetUser() user: Auth0Payload) {
    return this.courseService.findUserCourses(user);
  }
}
