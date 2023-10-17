import { registerAs } from '@nestjs/config';
import { AUTH_CONFIG } from 'src/constants';

export const authConfig = registerAs<AuthConfig>(AUTH_CONFIG, () => ({
  ACCESS_TOKEN: process.env.ACCESS_TOKEN,
  REFRESH_TOKEN: process.env.REFRESH_TOKEN,
}));

export interface AuthConfig {
  ACCESS_TOKEN: string;
  REFRESH_TOKEN: string;
}
