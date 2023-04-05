import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '../../entities/user.entity';
import { UserRole } from '../../entities/user-role.entity';
import { RoleService } from '../role/role.service';

@Injectable()
export class UsersService implements OnModuleInit {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    @InjectRepository(UserRole)
    private readonly userRoleRepository: Repository<UserRole>,
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

    // 创建用户角色关联
    await this.userRoleRepository.save({
      roleId: defaultRole.roleId,
      UserId: createUserDto.phoneNumber,
    });

    return this.usersRepository.save({
      ...createUserDto,
      // 这里的sub是指创建人的手机号，是从token中获取的
      creatorId: createUserDto.sub,
      userRoles: [
        {
          roleId: defaultRole.roleId,
        },
      ],
    });
  }

  // 查询所有用户,不包含软删的
  async findAll(): Promise<User[]> {
    const Users = await this.usersRepository.find({
      where: { isDeleted: 0 },
    });
    return Users;
  }

  // 根据手机号查询用户
  async findOneByPhone(phoneNumber: string): Promise<User> {
    const value = await this.usersRepository.findOne({
      where: { phoneNumber },
    });
    return value;
  }
}
