import { User, UserRepository } from '@/user/entity/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepository: UserRepository) {}

    async create(user: User) {
        return await this.userRepository.create(user);
    }
}
