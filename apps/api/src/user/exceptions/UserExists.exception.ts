import { BadRequestException, HttpStatus } from '@nestjs/common';

export class UserExistsException extends BadRequestException {
  constructor() {
    super({
      message: 'Credentials are taken.',
      status: HttpStatus.BAD_REQUEST,
    });
  }
}
