import { User, UserRepository } from '@/user/entity/user.entity';
import { UserNotFoundException } from '@/user/exceptions/UserNotFound.exception';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepository: UserRepository) {}

  async findUserById(id: number) {
    const user = this.userRepository.findOneBy({ id });
    if (!user) throw new UserNotFoundException();
    return user;
  }
}
