import { Test, TestingModule } from '@nestjs/testing';
import { PrivateNewsService } from './private-news.service';

describe('PrivateNewsService', () => {
  let service: PrivateNewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrivateNewsService],
    }).compile();

    service = module.get<PrivateNewsService>(PrivateNewsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
