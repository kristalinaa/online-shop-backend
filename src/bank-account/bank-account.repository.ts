import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { BankAccount } from './entities/bank-account.entity';

@Injectable()
export class BankAccountRepository extends Repository<BankAccount> {
  constructor(private dataSource: DataSource) {
    super(BankAccount, dataSource.createEntityManager());
  }

 
}
