import { BadRequestException, HttpStatus } from '@nestjs/common';

export class InvalidCredentialsException extends BadRequestException {
  constructor() {
    super({
      message: 'Invalid credentials.',
      status: HttpStatus.BAD_REQUEST,
    });
  }
}
