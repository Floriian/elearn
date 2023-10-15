import { IDatabaseConfig, databaseConfig } from '@/config';
import { DATABASE_CONFIG } from '@/constants';
import { Course } from '@/course/entity/course.entity';
import { News } from '@/news/entities/news.entity';
import { User } from '@/user/entity/user.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';

export const typeormConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule.forFeature(databaseConfig)],
  useFactory: async (configService: ConfigService) => {
    return {
      type: 'postgres',
      url: configService.get<IDatabaseConfig>(DATABASE_CONFIG).DATABASE_URL,
      entities: [User, News, Course],
      migrations: ['dist/migrations/*{.ts,.js}'],
      synchronize: true,
      logger: 'debug',
    };
  },
  inject: [ConfigService],
};
