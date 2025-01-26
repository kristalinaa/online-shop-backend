/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { UserRole } from './entities/user-role.entity';

@Injectable()
export class UserRoleRepository extends Repository<UserRole> {

  constructor(private dataSource: DataSource) {
    super(UserRole, dataSource.createEntityManager());
  }

    getUserRoles(user_id: number){
      const queryBuilder = this.createQueryBuilder('user_role')
      .select([
        'role.role'
      ])
      .leftJoin('user_role.user','user')
      .leftJoin('user_role.role','role')
      .where('user.id = :id', { id: user_id })    
    return queryBuilder;
    }
   
}