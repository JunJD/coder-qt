import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from 'src/entities/role.entity';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private readonly usersRepository: Repository<Role>,
  ) {}

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
}
