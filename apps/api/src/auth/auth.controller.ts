import { AuthService } from '@/auth/auth.service';
import { SignInDto } from '@/auth/dto/sign-in.dto';
import { SignUpDto } from '@/auth/dto/sign-up.dto';
import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('refresh')
  refreshTokens(@Req() req: Request) {
    const id = req.user['sub'];
    const token = req.user['refreshToken'];
    return this.authService.refreshTokens(+id, token);
  }

  @Post('signup')
  signUp(@Body() dto: SignUpDto) {
    return this.authService.signUp(dto);
  }

  @Post('signin')
  signIn(@Body() dto: SignInDto) {
    return this.authService.signIn(dto);
  }

  @Post('logout')
  logout(@Req() req: Request) {
    this.authService.logout(req.user['sub']);
  }
}
