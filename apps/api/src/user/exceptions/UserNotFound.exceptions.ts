import { HttpStatus, NotFoundException } from '@nestjs/common';

export class UserNotFoundException extends NotFoundException {
  constructor() {
    super({
      message: 'User not found.',
      status: HttpStatus.NOT_FOUND,
    });
  }
}
