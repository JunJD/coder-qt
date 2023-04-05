import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './decorators/public.decorator';
import { LoginAuthDto } from './dto/login-auth.dto';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // 登录
  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() loginAuthDto: LoginAuthDto) {
    return this.authService.signIn({
      phoneNumber: loginAuthDto.phoneNumber,
      password: loginAuthDto.password,
    });
  }

  // 获取用户信息
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
