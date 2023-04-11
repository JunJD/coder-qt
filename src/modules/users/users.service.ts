import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '../../entities/user.entity';
import { RoleService } from '../role/role.service';

@Injectable()
export class UsersService implements OnModuleInit {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    private readonly roleService: RoleService,
  ) {}

  // 模块初始化
  async onModuleInit() {
    // 创建默认账号
    const defaultUser = await this.findOneByPhone('88888888');
    if (!defaultUser) {
      await this.create({
        phoneNumber: '88888888',
        userName: 'admin',
        password: '123456',
      });
    }
  }

  // 创建用户
  async create(createUserDto: CreateUserDto): Promise<User> {
    // 默认角色
    const defaultRole = await this.roleService.findOneByRoleName('user');
    const user = new User();
    user.phoneNumber = createUserDto.phoneNumber;
    user.userName = createUserDto.userName;
    user.password = createUserDto.password;
    user.roles = [defaultRole];
    return this.usersRepository.save(user);
  }

  // 添加用户的角色
  async updateRole(phoneNumber: string, roleId: string): Promise<User> {
    const user = await this.findOneByPhone(phoneNumber);
    const role = await this.roleService.findOneByRoleId(roleId);
    user.roles = [...user.roles, role];
    return this.usersRepository.save(user);
  }

  // 查询所有用户,不包含软删的,并把角色也查出来
  async findAll(): Promise<User[]> {
    const value = await this.usersRepository.find({
      relations: ['roles'],
      where: { isDeleted: 0 },
    });
    return value;
  }

  // 根据手机号查询用户
  async findOneByPhone(phoneNumber: string): Promise<User> {
    const value = await this.usersRepository.findOne({
      where: { phoneNumber },
    });
    return value;
  }
}
