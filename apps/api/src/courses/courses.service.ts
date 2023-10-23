import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Course, CourseRepository } from 'src/courses/entities/course.entity';
import { CourseQueryDto } from 'src/courses/dto/course-query.dto';

@Injectable()
export class CoursesService {
  private readonly ITEMS_PER_PAGE: number = 8;
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: CourseRepository,
  ) {}
  async create(createCourseDto: CreateCourseDto): Promise<Course> {
    return await this.courseRepository.save(createCourseDto);
  }

  async findAll(queries: CourseQueryDto, email: string) {
    const [result, total] = await this.courseRepository.findAndCount({
      where: {
        class: {
          users: {
            email,
          },
        },
      },
      take: this.ITEMS_PER_PAGE,
      skip: (queries.page - 1) * this.ITEMS_PER_PAGE,
    });

    return {
      data: result,
      count: total,
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
