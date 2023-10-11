import { News } from '@/news/entities/news.entity';
import { NewsService } from '@/news/news.service';
import { PrivateNewsController } from '@/news/private/private.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([News])],
  controllers: [PrivateNewsController],
  providers: [NewsService],
})
export class PrivateNewsModule {}
