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

  async findAll() {
    return await this.newsRepository.find({ take: 10 });
  }

  async findOne(id: number) {
    const oneNews = await this.newsRepository.findOneBy({ id });
    return oneNews;
  }

  update(id: number, updateNewsDto: UpdateNewsDto) {
    return `This action updates a #${id} news`;
  }

  remove(id: number) {
    return `This action removes a #${id} news`;
  }
}
