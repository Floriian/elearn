import { typeormConfig } from '@/config';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '@/auth/auth.module';
import { UserModule } from './user/user.module';
import { NewsModule } from './news/news.module';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRootAsync(typeormConfig),
    ConfigModule.forRoot(),
    UserModule,
    NewsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
