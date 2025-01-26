import { Controller, Get } from '@nestjs/common';
import { UserRoleService } from './user-role.service';

@Controller('user-role')
export class UserRoleController {
  constructor(private readonly userRoleService: UserRoleService) {}

  @Get()
  async get(){
    return await this.userRoleService.getUserRole(1);
  }
}
