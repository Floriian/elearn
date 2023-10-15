import { typeormConfig } from '@/config';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '@/auth/auth.module';
import { UserModule } from './user/user.module';
import { CreateUserMiddleware } from '@/middlewares/user.middleware';
import { User } from '@/user/entity/user.entity';
import { CourseModule } from './course/course.module';
import { RouterModule } from '@nestjs/core';
import { NewsModule } from '@/news/news.module';
import { PublicNewsModule } from '@/news/public/publicNews.module';
import { PrivateNewsModule } from '@/news/private/privateNews.module';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRootAsync(typeormConfig),
    TypeOrmModule.forFeature([User]),
    ConfigModule.forRoot(),
    UserModule,
    PrivateNewsModule,
    PublicNewsModule,
    NewsModule,
    CourseModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {}
}
