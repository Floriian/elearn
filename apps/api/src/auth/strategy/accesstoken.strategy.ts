import { IAuthConfig } from '@/config/auth.config';
import { AUTH_CONFIG } from '@/constants';
import { JwtPayload } from '@/types/JwtPayload';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class AccessTokenStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get<IAuthConfig>(AUTH_CONFIG).ACCESS_TOKEN,
    });
  }

  validate(payload: JwtPayload) {
    return payload;
  }
}
