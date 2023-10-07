import { Controller } from '@nestjs/common';
import { PrivateNewsService } from './private-news.service';

@Controller('private-news')
export class PrivateNewsController {
  constructor(private readonly privateNewsService: PrivateNewsService) {}
}
