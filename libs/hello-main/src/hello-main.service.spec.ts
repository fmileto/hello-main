import { Test, TestingModule } from '@nestjs/testing';
import { HelloMainService } from './hello-main.service';

describe('HelloMainService', () => {
  let service: HelloMainService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HelloMainService],
    }).compile();

    service = module.get<HelloMainService>(HelloMainService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
