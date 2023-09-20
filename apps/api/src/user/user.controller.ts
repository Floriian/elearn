import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() body: any) {
    try {
      return await this.userService.create(body);
    } catch(e) {
      console.log(e);
    }
  }
}
