import { Controller, Get, Post, Req } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '../../entities/user.entity';
import { UsersService } from './users.service';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async create(@Req() req): Promise<User> {
    const createUserDto: CreateUserDto = req.body;
    const user = req.user;
    return await this.usersService.create({
      ...createUserDto,
      // 这里的sub是指创建人的手机号，是从token中获取的
      sub: user.sub,
    });
  }

  // 查询所有用户
  @Get('findAll')
  async findAll(): Promise<User[]> {
    return await this.usersService.findAll();
  }
}
