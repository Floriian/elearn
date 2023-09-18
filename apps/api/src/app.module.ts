import { typeormConfig } from '@/config';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '@/auth/auth.module';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRootAsync(typeormConfig),
    ConfigModule.forRoot(),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
