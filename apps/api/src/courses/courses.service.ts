import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Course, CourseRepository } from 'src/courses/entities/course.entity';
import { CourseQueryDto } from 'src/courses/dto/course-query.dto';
import { User, UserRepository } from 'src/user/entities/user.entity';

@Injectable()
export class CoursesService {
  private readonly ITEMS_PER_PAGE: number = 8;
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: CourseRepository,
    @InjectRepository(User) private readonly userRepository: UserRepository,
  ) {}
  async create(createCourseDto: CreateCourseDto): Promise<Course> {
    return await this.courseRepository.save(createCourseDto);
  }

  async findAll(queries: CourseQueryDto, email: string) {
    const courses = await this.userRepository
      .createQueryBuilder('user')
      .where('user.email = :email', { email })
      .innerJoinAndSelect('user.courses', 'course')
      .leftJoin('user.classes', 'class')
      .leftJoin('class.course', 'classCourse')
      .take(this.ITEMS_PER_PAGE)
      .skip((queries.page - 1) * this.ITEMS_PER_PAGE)
      .getRawMany();

    console.log(courses);

    return {
      data: courses,
      count: courses.length,
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} course`;
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return `This action updates a #${id} course`;
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}
