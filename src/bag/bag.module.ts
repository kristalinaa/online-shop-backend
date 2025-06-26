import { Module } from '@nestjs/common';
import { BagService } from './bag.service';
import { BagController } from './bag.controller';
import { BagRepository } from './bag.repository';
import { ProductModule } from 'src/product/product.module';
import { UserModule } from 'src/user/user.module';


@Module({
  exports: [BagService],
  controllers: [BagController],
  providers: [BagService,BagRepository],
  imports: [ProductModule, UserModule]
})
export class BagModule {}
