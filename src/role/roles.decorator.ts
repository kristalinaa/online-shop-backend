import { SetMetadata } from "@nestjs/common";
import { ROLE } from "./role.enum";

export const HasRoles = (...roles: ROLE[]) => SetMetadata('roles', roles);
