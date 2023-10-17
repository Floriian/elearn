import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from 'src/config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { ATGuard } from 'src/auth/guards/at.guard';
import { PrivateNewsModule } from 'src/news/private/privateNews.module';
import { PublicNewsModule } from 'src/news/public/publicNews.module';
import { NewsModule } from 'src/news/news.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync(typeormConfig),
    UserModule,
    AuthModule,
    PrivateNewsModule,
    PublicNewsModule,
    NewsModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ATGuard,
    },
  ],
})
export class AppModule {}
