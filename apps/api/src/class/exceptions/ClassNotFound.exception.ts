import { HttpStatus, NotFoundException } from '@nestjs/common';

export class ClassNotFoundException extends NotFoundException {
  constructor() {
    super({
      message: 'Class not found.',
      status: HttpStatus.NOT_FOUND,
    });
  }
}
