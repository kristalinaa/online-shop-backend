import { Test, TestingModule } from '@nestjs/testing';
import { SoldController } from './sold.controller';
import { SoldService } from './sold.service';

describe('SoldController', () => {
  let controller: SoldController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SoldController],
      providers: [SoldService],
    }).compile();

    controller = module.get<SoldController>(SoldController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
