import { ROLE } from 'src/role/role.enum';

export interface CreateUserDto {
  firstName: string;
  email: string;
  password: string;
  type: string;
}
