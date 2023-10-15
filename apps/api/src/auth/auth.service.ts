import { SignUpDto } from '@/auth/dto/sign-up.dto';
import { CredentialsTakenException } from '@/auth/exceptions/credentials.exception';
import { User, UserRepository } from '@/user/entity/user.entity';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryFailedError } from 'typeorm';
import * as argon from 'argon2';
import { IAuthConfig } from '@/config';
import { AUTH_CONFIG } from '@/constants';
import { SignInDto } from '@/auth/dto/sign-in.dto';
import { UserNotFoundException } from '@/user/exceptions/UserNotFound.exception';
import { InvalidCrendentialsException } from '@/auth/exceptions/invalid-credentials.exception';
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: UserRepository,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async signUp(dto: SignUpDto) {
    try {
      const hash = await this.hash(dto.password);

      const user = await this.userRepository.save({
        ...dto,
        password: hash,
      });

      const tokens = await this.getTokens(user.id, user.email);
      await this.updateRefreshToken(user.id, tokens.rt);

      return tokens;
    } catch (error) {
      if (error instanceof QueryFailedError)
        throw new CredentialsTakenException();
      throw error;
    }
  }

  async signIn(dto: SignInDto) {
    const user = await this.userRepository.findOneBy({ email: dto.email });
    if (!user) throw new UserNotFoundException();

    const isPasswordMatch = await argon.verify(user.password, dto.password);
    if (!isPasswordMatch) throw new InvalidCrendentialsException();

    const tokens = await this.getTokens(user.id, user.email);
    await this.updateRefreshToken(user.id, tokens.rt);

    return tokens;
  }

  async logout(userId: number) {
    return this.userRepository.update(
      {
        id: userId,
      },
      { refreshToken: null },
    );
  }

  async updateRefreshToken(id: number, token: string) {
    const hashedToken = await this.hash(token);
    await this.userRepository.update(
      { id },
      {
        refreshToken: hashedToken,
      },
    );
  }

  async refreshTokens(id: number, refreshToken: string) {
    const user = await this.userRepository.findOneBy({ id });
    if (!user || !user.refreshToken) throw new UnauthorizedException();

    const isTokenMatches = await argon.verify(user.refreshToken, refreshToken);
    if (!refreshToken) throw new UnauthorizedException();

    const tokens = await this.getTokens(user.id, user.email);
    await this.updateRefreshToken(user.id, tokens.rt);
    return tokens;
  }

  async getTokens(sub: number, email: string) {
    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(
        { sub, email },
        {
          secret: this.configService.get<IAuthConfig>(AUTH_CONFIG).ACCESS_TOKEN,
          expiresIn: '15m',
        },
      ),
      this.jwtService.signAsync(
        { sub, email },
        {
          secret:
            this.configService.get<IAuthConfig>(AUTH_CONFIG).REFRESH_TOKEN,
          expiresIn: '7d',
        },
      ),
    ]);
    return {
      at,
      rt,
    };
  }

  hash(data: string) {
    return argon.hash(data);
  }
}
