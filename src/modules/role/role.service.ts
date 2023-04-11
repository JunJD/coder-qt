import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from 'src/entities/role.entity';
@Injectable()
export class RoleService implements OnModuleInit {
  constructor(
    @InjectRepository(Role)
    private readonly usersRepository: Repository<Role>,
  ) {}

  // 模块初始化
  async onModuleInit() {
    // 创建默认角色
    const defaultRole = await this.findOneByRoleName('user');
    if (!defaultRole) {
      await this.create({
        roleName: 'user',
        sub: '88888888',
      });
    }
  }

  // 创建用户
  async create(createRoleDto: CreateRoleDto): Promise<Role> {
    const role = new Role();
    // 通过手机号查询创建人
    role.roleName = createRoleDto.roleName;
    role.creatorId = createRoleDto.sub;
    return await this.usersRepository.save(role);
  }

  // 根据角色名查询角色，模糊查询
  async findOneByRoleName(roleName: string): Promise<Role> {
    return await this.usersRepository.findOne({
      where: { roleName },
    });
  }

  // 根据角色id查询角色，模糊查询
  async findOneByRoleId(roleId: string): Promise<Role> {
    return await this.usersRepository.findOne({
      where: { roleId },
    });
  }
}
