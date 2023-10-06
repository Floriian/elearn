import { Auth0Payload } from '@/types';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetUser = createParamDecorator(
  (data: Auth0Payload | undefined, ctx: ExecutionContext) => {
    const req: Express.Request = ctx.switchToHttp().getRequest();

    if (data) {
      return req['user'][data];
    }

    return req['user'];
  },
);
