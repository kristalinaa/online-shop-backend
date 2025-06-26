import { Module } from '@nestjs/common';
import { BankAccountService } from './bank-account.service';
import { BankAccountController } from './bank-account.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankAccount } from './entities/bank-account.entity';
import { UserModule } from 'src/user/user.module';
import { BankAccountRepository } from './bank-account.repository';
import { CheckoutRepository } from 'src/checkout/checkout.repository';

@Module({
  imports: [TypeOrmModule.forFeature([BankAccount]), UserModule],
  controllers: [BankAccountController],
  providers: [BankAccountService, BankAccountRepository, CheckoutRepository],
})
export class BankAccountModule {}
