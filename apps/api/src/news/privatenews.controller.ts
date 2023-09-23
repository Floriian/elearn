import { JwtGuard } from '@/guards';
import { News } from '@/news/entities/news.entity';
import { NewsService } from '@/news/news.service';
import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  UseGuards,
} from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('news/private')
@ApiTags('Private news')
export class PrivateNewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Returns all private news' })
  @ApiOkResponse({
    status: HttpStatus.OK,
    description: 'Returns all news in the database, with private = true',
    type: [News],
  })
  @UseGuards(JwtGuard)
  findAll() {
    return this.newsService.findAll(true);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Return one private news.' })
  @ApiOkResponse({
    status: HttpStatus.OK,
    description: 'Returns one news in the database, with private = true',
    type: News,
  })
  @UseGuards(JwtGuard)
  findOne(@Param('id') id: string) {
    return this.newsService.findOne(+id, true);
  }
}
