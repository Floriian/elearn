import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Class, ClassRepository } from 'src/class/entities/class.entity';
import { QueryFailedError } from 'typeorm';
import { ClassExistsException } from 'src/class/exceptions/ClassExists.exception';
import { ClassNotFoundException } from 'src/class/exceptions/ClassNotFound.exception';
import { UserService } from 'src/user/user.service';
import { User, UserRepository } from 'src/user/entities/user.entity';

@Injectable()
export class ClassService {
  constructor(
    @InjectRepository(Class) private readonly classRepository: ClassRepository,
    @InjectRepository(User) private readonly userRepository: UserRepository,
    private readonly userService: UserService,
  ) {}
  async create(createClassDto: CreateClassDto) {
    try {
      const newClass = await this.classRepository.save(createClassDto);
      return newClass;
    } catch (error) {
      if (error instanceof QueryFailedError) {
        throw new ClassExistsException();
      }
    }
  }

  async joinClass(inviteCode: string, email: string) {
    const findClassByInviteCode = await this.classRepository.findOneBy({
      inviteCode,
    });
    if (!findClassByInviteCode) throw new ClassNotFoundException();

    const user = await this.userService.findOneByEmail(email);

    user.classes.push(findClassByInviteCode);

    const result = await this.userRepository.save(user);

    if (!result) throw new InternalServerErrorException();
    return result;
  }

  async leaveClass(classId: number, email: string) {
    const user = await this.userService.findOneByEmail(email);
    user.classes = user.classes.filter((userClass) => userClass.id != classId);
    return await this.userRepository.save(user);
  }

  async findAll(email: string) {
    return await this.classRepository.find({
      where: {
        users: {
          email,
        },
      },
    });
  }

  async findOne(id: number, email: string) {
    return await this.classRepository.findOneBy({
      id,
      users: {
        email,
      },
    });
  }

  update(id: number, updateClassDto: UpdateClassDto) {
    return `This action updates a #${id} class`;
  }

  remove(id: number) {
    return `This action removes a #${id} class`;
  }
}
