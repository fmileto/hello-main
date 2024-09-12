import { Test, TestingModule } from '@nestjs/testing';
import { HelloSlaveService } from './hello-slave.service';

describe('HelloSlaveService', () => {
  let service: HelloSlaveService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HelloSlaveService],
    }).compile();

    service = module.get<HelloSlaveService>(HelloSlaveService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
