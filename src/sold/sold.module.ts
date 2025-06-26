import { Module } from '@nestjs/common';
import { SoldService } from './sold.service';
import { SoldController } from './sold.controller';
import { SoldRepository } from './sold.repository';

@Module({
  imports: [],
  exports: [SoldService],
  controllers: [SoldController],
  providers: [SoldService,SoldRepository],
})
export class SoldModule {}
