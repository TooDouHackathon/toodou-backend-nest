import { Test, TestingModule } from '@nestjs/testing';
import { YoxiController } from './yoxi.controller';
import { YoxiService } from './yoxi.service';

describe('YoxiController', () => {
  let controller: YoxiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [YoxiController],
      providers: [YoxiService],
    }).compile();

    controller = module.get<YoxiController>(YoxiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
