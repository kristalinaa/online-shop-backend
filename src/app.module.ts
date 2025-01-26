import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { BankAccountModule } from './bank-account/bank-account.module';
import { UserModule } from './user/user.module';
import { BankAccount } from './bank-account/entities/bank-account.entity';
import { AuthModule } from './auth/auth.module';
import { Role } from './role/entities/role.entity';
import { UserRole } from './user-role/entities/user-role.entity';
import { RoleModule } from './role/role.module';
import { UserRoleModule } from './user-role/user-role.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '19990707@10AMiwasborn',
      database: 'online-shop',
      entities: [User, BankAccount, Role, UserRole],
      synchronize: true,
    }),
    UserModule,
    BankAccountModule,
    RoleModule,
    UserRoleModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
