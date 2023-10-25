import { SetMetadata } from '@nestjs/common';
import { Role } from 'src/user/entities/roles';

export const ROLES_KEY = 'ROLES';

export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);
