import { Module } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsController } from './news.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { News } from '@/news/entities/news.entity';
import { PrivateNewsController } from '@/news/privatenews.controller';

@Module({
  controllers: [NewsController, PrivateNewsController],
  providers: [NewsService],
  imports: [TypeOrmModule.forFeature([News])],
})
export class NewsModule {}
