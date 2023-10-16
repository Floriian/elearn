import { registerAs } from '@nestjs/config';
import { DATABASE_CONFIG } from 'src/constants';

export const databaseConfig = registerAs<DatabaseConfig>(
  DATABASE_CONFIG,
  () => ({
    DATABASE_URL: process.env.DATABASE_URL,
  }),
);

export interface DatabaseConfig {
  DATABASE_URL: string;
}
