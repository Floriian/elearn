import { DocumentBuilder } from '@nestjs/swagger';
export const swaggerConfig = new DocumentBuilder()
  .setTitle('ExamX')
  .setDescription('The ExamX API')
  .build();
