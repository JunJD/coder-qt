import { Body, Controller, Get, Inject, Post, Req } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '../../entities/user.entity';
import { UsersService } from './users.service';
import { AuthController } from '../auth/auth.controller';
@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    @Inject(AuthController) private readonly authController: AuthController,
  ) {}

  @Post()
  async create(@Req() req): Promise<User> {
    const createUserDto: CreateUserDto = req.body;
    const user = this.authController.getProfile(req);
    return await this.usersService.create({
      ...createUserDto,
      // 这里的sub是指创建人的手机号，是从token中获取的
      sub: user.sub,
    });
  }

  // 删除用户
  @Post('delete')
  async delete(@Body() createUserDto: CreateUserDto): Promise<boolean> {
    await this.usersService.removeByPhone(createUserDto.phone);
    return true;
  }

  // 查询所有用户
  @Get('findAll')
  async findAll(): Promise<User[]> {
    return await this.usersService.findAll();
  }

  // 修改用户
  @Post('update')
  async update(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.usersService.update(createUserDto);
  }
}
