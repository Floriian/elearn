import { DATABASE_CONFIG } from "@/constants";
import { registerAs } from "@nestjs/config";
export const databaseConfig = registerAs<IDatabaseConfig>(DATABASE_CONFIG, () => ({
    DATABASE_URL: process.env.DATABASE_URL
}))

export interface IDatabaseConfig {
    DATABASE_URL: string;
}