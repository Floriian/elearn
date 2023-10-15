import { IAuthConfig } from '@/config/auth.config';
import { AUTH_CONFIG } from '@/constants';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh',
) {
  constructor(private configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get<IAuthConfig>(AUTH_CONFIG).REFRESH_TOKEN,
      passReqToCallback: true,
    });
  }

  validate(request: Request, payload: any) {
    const token = request.get('Authorization').replace('Bearer', '').trim();
    return { ...payload, token };
  }
}
