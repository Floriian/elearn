import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core'; // Correct import
import { TypeOrmModule } from '@nestjs/typeorm';
import { News } from 'src/news/entities/news.entity';
import { NewsService } from 'src/news/news.service';
import { PrivateNewsModule } from 'src/news/private/privateNews.module';
import { PublicNewsModule } from 'src/news/public/publicNews.module';

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
