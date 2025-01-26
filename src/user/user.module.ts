import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserRoleModule } from 'src/user-role/user-role.module';
import { UserRepository } from './user.repository';
import { UserRoleRepository } from 'src/user-role/user-role.repository';

@Module({
  imports: [TypeOrmModule.forFeature([User]), UserRoleModule],
  controllers: [UserController],
  providers: [UserService, UserRepository, UserRoleRepository],
  exports: [UserService],
})
export class UserModule {}
