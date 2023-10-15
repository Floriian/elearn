import { BadRequestException } from '@nestjs/common';

export class InvalidCrendentialsException extends BadRequestException {
  constructor() {
    super({
      message: 'Incorrect credentials.',
    });
  }
}
