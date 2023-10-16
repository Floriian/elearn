import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { DatabaseConfig, databaseConfig } from 'src/config/database.config';
import { DATABASE_CONFIG } from 'src/constants';

export const typeormConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule.forFeature(databaseConfig)],
  useFactory: async (configService: ConfigService) => ({
    type: 'postgres',
    url: configService.get<DatabaseConfig>(DATABASE_CONFIG).DATABASE_URL,
    entities: ['dist/**/**/**/*.entity{.ts,.js}'],
    migrations: ['dist/migrations/*{.ts,.js}'], //todo migration kekw
    synchronize: true,
  }),
  inject: [ConfigService],
};
