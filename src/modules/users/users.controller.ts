import { Controller, Get, Post, Req } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '../../entities/user.entity';
import { UsersService } from './users.service';
import { Role } from 'src/entities/role.entity';
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

  @Post('updateRole')
  async updateRole(@Req() req): Promise<User> {
    const { phoneNumber, roleId } = req.body;
    return await this.usersService.updateRole(phoneNumber, roleId);
  }

  // 根据用户查询拥有的权限
  @Post('findPermissionsByUser')
  async findPermissionsByUser(@Req() req): Promise<Partial<Role>[]> {
    const { phoneNumber } = req.body;
    return await this.usersService.findRolesByUser(phoneNumber);
  }

  // 查询所有用户
  @Get('findAll')
  async findAll(): Promise<User[]> {
    return await this.usersService.findAll();
  }
}
