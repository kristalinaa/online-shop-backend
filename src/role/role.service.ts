import { Injectable, Logger } from '@nestjs/common';
import { Role } from './entities/role.entity';
import { RoleRepository } from './user.repository';
import { CreateRoleDto, CreateRoleResponseDto } from './dto/role.dto';
import { IResponse } from 'src/common/IResponse';
import e from 'express';

@Injectable()
export class RoleService {

    private readonly logger = new Logger(RoleService.name);

    defaultRoleName: string = "INDIVID";
    constructor(
        private roleRepository: RoleRepository
    ){
        
    }

    async getRoleByName(roleName: string): Promise<Role>{
        return await this.roleRepository.findOneOrFail({
            where: {role: roleName}
        })
    }


    async getDefaultRole(): Promise<Role>{
        return await this.roleRepository.findOneOrFail({
            where: {role: this.defaultRoleName}
        })
    }

    async addNewRole(newRole: CreateRoleDto): Promise<IResponse<CreateRoleResponseDto>>{
        let response: IResponse<CreateRoleResponseDto>;
        try {
            const createdRole = await this.roleRepository.create(newRole);
            const savedRole = await this.roleRepository.save(createdRole);
            if(savedRole){
                response = {
                    success: true,
                    body: savedRole,
                    message: "Role is saved"
                }
                this.logger.log(`Role ${newRole.role} is saved`)

            }
        } catch (error) {
            this.logger.error(error.message)
        }

        return response;
    }
}
