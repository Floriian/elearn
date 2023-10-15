import { User, UserRepository } from '@/user/entity/user.entity';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NextFunction, Request } from 'express';

@Injectable()
export class CreateUserMiddleware implements NestMiddleware {
  constructor(
    @InjectRepository(User) private readonly userRepository: UserRepository,
  ) {}
  async use(req: Request, res: Response, next: NextFunction) {
    const { identifier } = req.headers;

    console.log(req.headers);

    if (identifier && identifier != '') {
      const isExistingUser = await this.userRepository.findBy({
        email: identifier as string,
      });
      if (isExistingUser) next();

      const user = new User();
      user.email = identifier as string;
      await this.userRepository.save(user);
    }

    next();
  }
}
