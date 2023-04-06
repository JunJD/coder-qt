import { HttpException, Injectable } from '@nestjs/common';
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

    if (user === null) {
      // 自定义异常, message: '用户不存在'
      throw new HttpException('用户不存在', 401);
    }

    if (user?.password !== loginAuthDto.password) {
      throw new HttpException('密码错误', 401);
    }

    const payload = { username: user.userName, sub: user.phoneNumber };

    return {
      ...payload,
      accessToken: await this.jwtService.signAsync(payload),
    };
  }
}
