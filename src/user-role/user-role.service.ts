import { Injectable } from '@nestjs/common';
import { Role } from '../role/entities/role.entity';
import { RoleService } from '../role/role.service';
import { User } from '../user/entities/user.entity';
import { UserRoleRepository } from './user-role.repository';

@Injectable()
export class UserRoleService {
  constructor(
    private userRoleRepository: UserRoleRepository,
    private roleService: RoleService,
  ) {}

  async appendOnUserRoleTable(insertedUser: User, role: string) {
    try {
      const roleEntity = await this.roleService.getRoleByName(role);
      return await this.userRoleRepository.save({
        role: roleEntity,
        user: insertedUser,
      });
    } catch (error) {}
  }

  async setUserDefaultRole(insertedUser: User) {
    try {
      return await this.userRoleRepository.save({
        role: await this.roleService.getDefaultRole(),
        user: insertedUser,
      });
    } catch (error) {}
  }

  async setUsertRole(insertedUser: User, role: string) {
    try {
      return await this.userRoleRepository.save({
        role: await this.roleService.getRoleByName(role),
        user: insertedUser,
      });
    } catch (error) {}
  }

  async getUserRole(user_id: number): Promise<any[]> {
    var roles: string[] = [];
    try {
      const results = await this.userRoleRepository
        .getUserRoles(user_id)
        .getRawMany();
      if (results) {
        results.map((role) => {
          roles.push(role.role_role);
        });
      }
      return roles;
    } catch (error) {
      console.log(error);
    }
  }
}
