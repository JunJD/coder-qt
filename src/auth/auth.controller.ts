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
import { CreateUserDto } from '../users/dto/create-user.dto';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() createUserDto: CreateUserDto) {
    return this.authService.signIn({
      phone: createUserDto.phone,
      password: createUserDto.password,
    });
  }

  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
