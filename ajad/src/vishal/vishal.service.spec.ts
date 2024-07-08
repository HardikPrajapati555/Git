import { Test, TestingModule } from '@nestjs/testing';
import { VishalService } from './vishal.service';

describe('VishalService', () => {
  let service: VishalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VishalService],
    }).compile();

    service = module.get<VishalService>(VishalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
