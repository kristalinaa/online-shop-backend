import { Module } from '@nestjs/common';
import { UserRoleService } from './user-role.service';
import { UserRoleController } from './user-role.controller';
import { UserRoleRepository } from './user-role.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleModule } from '../role/role.module';
import { UserRole } from './entities/user-role.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserRole]), RoleModule],
  exports: [UserRoleService],
  controllers: [UserRoleController],
  providers: [UserRoleService, UserRoleRepository],
})
export class UserRoleModule {}
