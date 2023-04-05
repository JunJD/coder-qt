import { Body, Controller, Post, Req } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from 'src/entities/role.entity';
import { RoleService } from './role.service';
import { FindRoleDto } from './dto/find-role.dto';
@Controller('Role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post('create')
  async create(@Req() req): Promise<Role> {
    const createRoleDto: CreateRoleDto = req.body;
    return this.roleService.create({
      ...createRoleDto,
      // 这里的sub是指创建人的手机号，是从token中获取的
      sub: req.user.sub,
    });
  }

  // 根据角色名查询角色,模糊查询
  @Post('findOneByRoleName')
  async findOneByRoleName(@Body() findRoleDto: FindRoleDto): Promise<Role> {
    const roleName = findRoleDto.roleName;
    return this.roleService.findOneByRoleName(roleName);
  }
}
