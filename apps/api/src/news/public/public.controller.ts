import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';

import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { News } from '@/news/entities/news.entity';
import { JwtGuard } from '@/guards';
import { NewsService } from '@/news/news.service';
import { CreateNewsDto } from '@/news/dto/create-news.dto';
import { UpdateNewsDto } from '@/news/dto/update-news.dto';

@Controller()
@ApiTags('Public news')
export class PublicNewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a news.' })
  @ApiCreatedResponse({
    status: HttpStatus.CREATED,
    description: 'Returns a news entity.',
    type: News,
  })
  create(@Body() createNewsDto: CreateNewsDto) {
    return this.newsService.create(createNewsDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Return all news from database.' })
  @ApiOkResponse({
    status: HttpStatus.OK,
    description: 'Returns a news entity.',
    type: [News],
  })
  findAll() {
    return this.newsService.findAll(false);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.newsService.findOne(+id, false);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNewsDto: UpdateNewsDto) {
    return this.newsService.update(+id, updateNewsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.newsService.remove(+id);
  }
}
