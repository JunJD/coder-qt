import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  // 登录 生成token
  async signIn(createUserDto: CreateUserDto): Promise<{ accessToken: string }> {
    const user = await this.usersService.findOneByPhone(createUserDto.phone);
    if (user?.password !== createUserDto.password) {
      console.log(user, createUserDto.password);
      throw new UnauthorizedException();
    }
    const payload = { username: user.userName, sub: user.phone };
    return {
      ...payload,
      accessToken: await this.jwtService.signAsync(payload),
    };
  }
}
