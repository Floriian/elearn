import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { SignInDto } from 'src/auth/dto/sign-in.dto';
import { Request } from 'express';
import { RTGuard } from 'src/auth/guards/rt.guard';
import { PublicMethod } from 'src/auth/decorators';
import { GetUser } from 'src/auth/decorators/getuser.decorator';
import { ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @PublicMethod()
  @Post('signup')
  signup(@Body() dto: CreateUserDto) {
    return this.authService.signUp(dto);
  }

  @PublicMethod()
  @Post('signin')
  signin(@Body() dto: SignInDto) {
    return this.authService.signIn(dto);
  }

  @Get('logout')
  logout(@Req() request: Request) {
    this.authService.logout(request.user['sub']);
  }

  @PublicMethod()
  @UseGuards(RTGuard)
  @Get('refresh')
  refreshTokens(@Req() request: Request) {
    const id = request.user['sub'];
    const token = request.user['refreshToken'];
    return this.authService.refreshTokens(+id, token);
  }

  @Get()
  currentUser(@GetUser() user: any) {
    console.log({ user });
  }
}
