import { Module } from '@nestjs/common';
import { CheckoutService } from './checkout.service';
import { CheckoutController } from './checkout.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Checkout } from './entities/checkout.entity';
import { CheckoutRepository } from './checkout.repository';
import { UserModule } from 'src/user/user.module';
import { BankAccountRepository } from 'src/bank-account/bank-account.repository';
import { ProductModule } from 'src/product/product.module';
import { SoldModule } from 'src/sold/sold.module';

@Module({
  imports: [TypeOrmModule.forFeature([Checkout]), UserModule, ProductModule, SoldModule],
  controllers: [CheckoutController],
  providers: [CheckoutService, CheckoutRepository, BankAccountRepository],
  exports: [CheckoutService]

})
export class CheckoutModule {}
