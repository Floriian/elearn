import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { passportJwtSecret } from 'jwks-rsa';
import { IAuth0Config } from "@/config";
import { AUTH0_CONFIG } from "@/constants";
import { Auth0Payload } from "@/types";
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private configService: ConfigService) {
    super({
      secretOrKeyProvider: passportJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `${
          configService.get<IAuth0Config>(AUTH0_CONFIG).AUTH0_ISSUER_URL
        }.well-known/jwks.json`,
      }),
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      audience: configService.get<IAuth0Config>(AUTH0_CONFIG).AUTH0_AUDIENCE,
      issuer: configService.get<IAuth0Config>(AUTH0_CONFIG).AUTH0_ISSUER_URL,
      algorithms: ['RS256'],
    });
  }
  validate(payload: Auth0Payload) {
    return payload;
  }
}