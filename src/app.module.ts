import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { BankAccountModule } from './bank-account/bank-account.module';
import { UserModule } from './user/user.module';
import { BankAccount } from './bank-account/entities/bank-account.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'online-shop',
      entities: [
        User,
        BankAccount
      ],
      synchronize: true,
    }),
   UserModule,
   BankAccountModule,
   AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
