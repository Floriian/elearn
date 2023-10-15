import { SignUpDto } from '@/auth/dto/sign-up.dto';
import { User, UserRepository } from '@/user/entity/user.entity';
import { UserNotFoundException } from '@/user/exceptions/UserNotFound.exception';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepository: UserRepository) {}

  async createUser(dto: SignUpDto) {
    return this.userRepository.create(dto);
  }

  async findUserById(id: number) {
    const user = this.userRepository.findOneBy({ id });
    if (!user) throw new UserNotFoundException();
    return user;
  }
}
