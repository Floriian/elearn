import { typeormConfig } from '@/config';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '@/auth/auth.module';
import { UserModule } from './user/user.module';
import { NewsModule } from './news/news.module';
import { CreateUserMiddleware } from '@/middlewares/user.middleware';
import { User } from '@/user/entity/user.entity';
import { CourseModule } from './course/course.module';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRootAsync(typeormConfig),
    TypeOrmModule.forFeature([User]),
    ConfigModule.forRoot(),
    UserModule,
    NewsModule,
    CourseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CreateUserMiddleware).forRoutes('*');
  }
}
