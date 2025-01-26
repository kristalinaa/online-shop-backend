import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { RoleRepository } from './user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Role]), 

  ],
  exports: [RoleService],
  controllers: [RoleController],
  providers: [RoleService,RoleRepository]
})
export class RoleModule {}
