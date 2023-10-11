import { News } from '@/news/entities/news.entity';
import { NewsService } from '@/news/news.service';
import { PublicNewsController } from '@/news/public/public.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([News])],
  controllers: [PublicNewsController],
  providers: [NewsService],
})
export class PublicNewsModule {}
