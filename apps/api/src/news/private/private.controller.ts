import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { News } from 'src/news/entities/news.entity';
import { NewsService } from 'src/news/news.service';

@Controller()
@ApiTags('Private news')
export class PrivateNewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    status: HttpStatus.OK,
    description: 'Returns all private news',
    type: [News],
  })
  findAll() {
    return this.newsService.findAll(true);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    status: HttpStatus.OK,
    description: 'Returns a news by id',
    type: News,
  })
  findOne(@Param('id') id: string) {
    return this.newsService.findOne(+id, true);
  }
}
