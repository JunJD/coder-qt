import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from 'src/entities/role.entity';
@Injectable()
export class RoleService implements OnModuleInit {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
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
    return await this.roleRepository.save(role);
  }

  // 根据角色名查询角色，模糊查询
  async findOneByRoleName(roleName: string): Promise<Role> {
    return await this.roleRepository.findOne({
      where: { roleName: Like(`%${roleName}%`) },
    });
  }

  // 根据角色id查询角色，精确查询
  async findOneByRoleId(roleId: string): Promise<Role> {
    return await this.roleRepository.findOne({
      where: { roleId: roleId },
    });
  }

  // 查询所有的角色,不包含被软删除的角色
  async findAll(): Promise<Role[]> {
    return await this.roleRepository.find({
      where: { isDeleted: 0 },
    });
  }

  // 查询所有的角色以及对应的所有用户
  async findAllAndUsers(): Promise<Role[]> {
    return await this.roleRepository.find({
      where: { isDeleted: 0 },
      relations: ['users'],
    });
  }
}
