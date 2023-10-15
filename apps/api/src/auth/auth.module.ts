import { AuthController } from '@/auth/auth.controller';
import { AuthService } from '@/auth/auth.service';
import { authConfig } from '@/config/auth.config';
import { User } from '@/user/entity/user.entity';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { AccessTokenStrategy } from '@/auth/strategy/accesstoken.strategy';
import { RefreshTokenStrategy } from '@/auth/strategy/refreshtoken.strategy';
import { UserModule } from '@/user/user.module';
@Module({
  imports: [
    JwtModule.register({}),
    ConfigModule.forFeature(authConfig),
    UserModule,
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AuthController],
  providers: [AuthService, AccessTokenStrategy, RefreshTokenStrategy],
})
export class AuthModule {}
