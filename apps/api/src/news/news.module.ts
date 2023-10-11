import { News } from '@/news/entities/news.entity';
import { NewsService } from '@/news/news.service';
import { PrivateNewsModule } from '@/news/private/privateNews.module';
import { PublicNewsModule } from '@/news/public/publicNews.module';
import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core'; // Correct import
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([News]),
    RouterModule.register([
      {
        path: 'news',
        children: [
          {
            path: 'public',
            module: PublicNewsModule,
          },
          {
            path: 'private',
            module: PrivateNewsModule,
          },
        ],
      },
    ]),
  ],
  providers: [NewsService],
})
export class NewsModule {}
