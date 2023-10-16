import { SetMetadata } from '@nestjs/common';

export const PublicMethod = () => SetMetadata('isPublic', true);
