import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { User } from 'src/user/entities/user.entity';

type UserData = keyof Omit<User, 'password' | 'refreshToken'>;

export const GetUser = createParamDecorator(
  (data: UserData | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();

    if (!data) return request.user;
    return request.user[data];
  },
);
