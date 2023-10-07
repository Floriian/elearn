import { Injectable } from '@nestjs/common';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { News, NewsRepository } from '@/news/entities/news.entity';

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(News) private readonly newsRepository: NewsRepository,
  ) {}
  async create(createNewsDto: CreateNewsDto) {
    const news = await this.newsRepository.save(createNewsDto);
    return news;
  }

  async findAll(isPrivate: boolean) {
    console.log(isPrivate);
    const allNews = await this.newsRepository.findBy({
      private: isPrivate,
    });

    return allNews;
  }

  async findOne(id: number, isPrivate: boolean) {
    const oneNews = await this.newsRepository
      .createQueryBuilder()
      .select('*')
      .where('private = :private', { private: isPrivate })
      .getRawOne();
    return oneNews;
  }

  update(id: number, updateNewsDto: UpdateNewsDto) {
    return `This action updates a #${id} news`;
  }

  remove(id: number) {
    return `This action removes a #${id} news`;
  }
}
