import { AUTH_CONFIG } from '@/constants';
import { registerAs } from '@nestjs/config';

export const authConfig = registerAs<IAuthConfig>(AUTH_CONFIG, () => ({
  ACCESS_TOKEN: process.env.ACCESS_TOKEN,
  REFRESH_TOKEN: process.env.REFRESH_TOKEN,
}));

export interface IAuthConfig {
  ACCESS_TOKEN: string;
  REFRESH_TOKEN: string;
}
