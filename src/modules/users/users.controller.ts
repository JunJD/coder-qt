import { Controller, Inject, Post, Req } from '@nestjs/common';
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
}
