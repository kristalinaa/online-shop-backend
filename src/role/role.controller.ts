import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto, CreateRoleResponseDto } from './dto/role.dto';

import { HasRoles } from './roles.decorator';
import { ROLE } from './role.enum';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { IResponse } from 'src/common/IResponse';

@Controller('api/role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post('add-role')
  // @UseGuards(JwtAuthGuard)
  // @HasRoles(ROLE.SUPER_ADMIN)
  async addRole(
    @Body() newRole: CreateRoleDto,
  ): Promise<IResponse<CreateRoleResponseDto>> {
    return this.roleService.addNewRole(newRole);
  }
}
