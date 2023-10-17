import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { News } from 'src/news/entities/news.entity';
import { NewsService } from 'src/news/news.service';
import { PrivateNewsController } from 'src/news/private/private.controller';

@Module({
  imports: [TypeOrmModule.forFeature([News])],
  controllers: [PrivateNewsController],
  providers: [NewsService],
})
export class PrivateNewsModule {}
