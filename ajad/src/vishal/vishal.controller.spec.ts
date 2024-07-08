import { Test, TestingModule } from '@nestjs/testing';
import { VishalController } from './vishal.controller';
import { VishalService } from './vishal.service';

describe('VishalController', () => {
  let controller: VishalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VishalController],
      providers: [VishalService],
    }).compile();

    controller = module.get<VishalController>(VishalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
