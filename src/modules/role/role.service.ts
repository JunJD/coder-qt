import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from 'src/entities/role.entity';
import { UsersService } from '../users/users.service';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private readonly usersRepository: Repository<Role>,
    private readonly usersService: UsersService,
  ) {}

  // 创建用户
  async create(createRoleDto: CreateRoleDto): Promise<Role> {
    const role = new Role();
    // 通过手机号查询创建人
    console.log(createRoleDto.sub);
    const adminUser = await this.usersService.findOneByPhone(createRoleDto.sub);
    role.roleName = createRoleDto.roleName;
    role.createTime = new Date();
    role.updateTime = new Date();
    role.createUser = adminUser;
    role.updateUser = adminUser;
    return this.usersRepository.save(role);
  }
}
