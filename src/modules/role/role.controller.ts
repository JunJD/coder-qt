import { Controller, Inject, Post, Req } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from 'src/entities/role.entity';
import { RoleService } from './role.service';
import { AuthController } from '../auth/auth.controller';
@Controller('Role')
export class RoleController {
  constructor(
    private readonly roleService: RoleService,
    @Inject(AuthController) private readonly authController: AuthController,
  ) {}

  @Post()
  async create(@Req() req): Promise<Role> {
    const createRoleDto: CreateRoleDto = req.body;
    const user = this.authController.getProfile(req);
    createRoleDto.sub = user.phone;
    return this.roleService.create({
      ...createRoleDto,
      sub: user.sub,
    });
  }
}
