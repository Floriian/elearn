import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { News } from 'src/news/entities/news.entity';
import { NewsService } from 'src/news/news.service';
import { PublicNewsController } from 'src/news/public/public.controller';

@Module({
  imports: [TypeOrmModule.forFeature([News])],
  controllers: [PublicNewsController],
  providers: [NewsService],
})
export class PublicNewsModule {}
