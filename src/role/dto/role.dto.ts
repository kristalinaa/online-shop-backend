/* eslint-disable prettier/prettier */

import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class RoleDto {

  @Expose()
  id: string;

  @Expose()
  role: string;

  // @Expose()
  // language: string;
  
}



export interface CreateRoleDto{
  role: string;
}

export interface CreateRoleResponseDto {
  role: string;
}