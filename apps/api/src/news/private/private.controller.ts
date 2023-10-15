import { AccessTokenStrategy } from '@/auth/strategy/accesstoken.strategy';
import { JwtGuard } from '@/guards';
import { RefreshTokenGuard } from '@/guards/RefreshToken.guard';
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
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('Private news')
@UseGuards(JwtGuard)
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
