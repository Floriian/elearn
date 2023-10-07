import { Module } from '@nestjs/common';
import { PrivateNewsService } from './private-news.service';
import { PrivateNewsController } from './private-news.controller';

@Module({
  controllers: [PrivateNewsController],
  providers: [PrivateNewsService],
})
export class PrivateNewsModule {}
