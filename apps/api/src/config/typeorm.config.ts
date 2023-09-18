import {IDatabaseConfig, databaseConfig} from "@/config"
import { DATABASE_CONFIG } from "@/constants";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModuleAsyncOptions } from "@nestjs/typeorm";

export const typeormConfig: TypeOrmModuleAsyncOptions = {
    imports: [ConfigModule.forFeature(databaseConfig)],
    useFactory: async (configService: ConfigService) => {
        return {
            type: 'postgres',
            url: configService.get<IDatabaseConfig>(DATABASE_CONFIG).DATABASE_URL,
            entities: ["dist/**/*.entity{.ts,.js}"],
            migrations: ["dist/migrations/*{.ts,.js}"],
        }
    },
    inject: [ConfigService],
}