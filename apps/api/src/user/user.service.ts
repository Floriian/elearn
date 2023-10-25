import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User, UserRepository } from 'src/user/entities/user.entity';
import { QueryFailedError } from 'typeorm';
import { UserExistsException } from 'src/user/exceptions/UserExists.exception';
import { UserNotFoundException } from 'src/user/exceptions/UserNotFound.exceptions';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: UserRepository,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      const user = await this.userRepository.create(createUserDto);
      return await this.userRepository.save(user);
    } catch (e) {
      if (e instanceof QueryFailedError) {
        throw new UserExistsException();
      }
      throw e;
    }
  }

  async findOneByEmail(email: string): Promise<User> {
    const user = await this.userRepository.findOneBy({ email });
    if (!user) throw new UserNotFoundException();
    return user;
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) throw new UserNotFoundException();
    return user;
  }

  async update(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<Pick<User, 'id' | 'email'>> {
    await this.findOne(id);

    await this.userRepository.update(
      { id },
      {
        ...updateUserDto,
      },
    );

    const user = await this.findOne(id);

    return {
      email: user.email,
      id: user.id,
    };
  }

  async remove(id: number) {
    await this.findOne(id);
    return await this.userRepository.delete({ id });
  }
}
