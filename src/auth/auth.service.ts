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

  async signIn(
    createUserDto: CreateUserDto,
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.findOneByPhone(createUserDto.phone);
    if (user?.password !== createUserDto.password) {
      console.log(user, createUserDto.password);
      throw new UnauthorizedException();
    }
    const payload = { username: user.userName, sub: user.phone };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
