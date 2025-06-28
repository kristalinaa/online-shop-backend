import { UserStatus } from "src/role/role.enum";


export interface UpdateUserActiveDto  {

    isActive: boolean;
    firstName: string;
    lastName: string;
}


export interface UpdateGeneralUserDto { 

    status: UserStatus;
}
