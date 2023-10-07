import { Test, TestingModule } from '@nestjs/testing';
import { PrivateNewsController } from './private-news.controller';
import { PrivateNewsService } from './private-news.service';

describe('PrivateNewsController', () => {
  let controller: PrivateNewsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrivateNewsController],
      providers: [PrivateNewsService],
    }).compile();

    controller = module.get<PrivateNewsController>(PrivateNewsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
