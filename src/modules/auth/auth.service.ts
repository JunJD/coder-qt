import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { LoginAuthDto } from './dto/login-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  // 登录 生成token
  async signIn(loginAuthDto: LoginAuthDto): Promise<{ accessToken: string }> {
    const user = await this.usersService.findOneByPhone(
      loginAuthDto.phoneNumber,
    );

    if (user?.password !== loginAuthDto.password) {
      throw new UnauthorizedException();
    }

    const payload = { username: user.userName, sub: user.phoneNumber };

    return {
      ...payload,
      accessToken: await this.jwtService.signAsync(payload),
    };
  }
}
