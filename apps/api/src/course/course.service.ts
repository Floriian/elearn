import { Course, CourseRepoistory } from '@/course/entity/course.entity';
import { JwtPayload } from '@/types';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: CourseRepoistory,
  ) {}

  async findUserCourses(user: JwtPayload): Promise<Course[]> {
    const courses = await this.courseRepository.find();
    return courses;
  }
}
