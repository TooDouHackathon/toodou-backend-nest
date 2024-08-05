import { Test, TestingModule } from '@nestjs/testing';
import { YoxiService } from './yoxi.service';

describe('YoxiService', () => {
  let service: YoxiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [YoxiService],
    }).compile();

    service = module.get<YoxiService>(YoxiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
