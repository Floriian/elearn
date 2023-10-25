import { BadRequestException, HttpStatus } from '@nestjs/common';

export class ClassExistsException extends BadRequestException {
  constructor() {
    super({
      message: 'This class with this name exists.',
      status: HttpStatus.BAD_REQUEST,
    });
  }
}
