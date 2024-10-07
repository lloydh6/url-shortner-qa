import { Test, TestingModule } from '@nestjs/testing';
import { FollowController } from './follow.controller';
import { UrlService } from '../services/url/url.service';

describe('FollowController', () => {
  let controller: FollowController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FollowController],
      providers: [UrlService],
    }).compile();

    controller = module.get<FollowController>(FollowController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
