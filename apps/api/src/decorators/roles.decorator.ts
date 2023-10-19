import { SetMetadata } from '@nestjs/common';
import { Roles as RolesEnum } from 'src/user/entities/roles';

export const ROLES_KEY = 'ROLES';

export const Roles = (...roles: RolesEnum[]) => SetMetadata(ROLES_KEY, roles);
