import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '../../entities/user.entity';
import { RoleService } from '../role/role.service';
import { Role } from 'src/entities/role.entity';

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
    let userRole;
    if (!createUserDto.roleId) {
      // 创建用户时，如果没有传角色id，则默认为user角色
      const defaultRole = await this.roleService.findOneByRoleId(
        'ffe76a47-4cf1-44c3-8e11-d7b7fc799eeb',
      );
      userRole = defaultRole;
    } else {
      // 创建用户时，如果传了角色id，则根据角色id查询角色
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      userRole = await this.roleService.findOneByRoleId(createUserDto.roleId);
    }

    // 查询用户是否存在
    const userExist = await this.findOneByPhone(createUserDto.phoneNumber);
    if (userExist) {
      return userExist;
    }

    const user = new User();
    user.phoneNumber = createUserDto.phoneNumber;
    user.userName = createUserDto.userName;
    user.password = createUserDto.password;
    user.roles = [userRole];
    return this.usersRepository.save(user);
  }

  // 添加用户的角色
  async updateRole(phoneNumber: string, roleId: string): Promise<User> {
    const user = await this.findOneByPhone(phoneNumber);
    const role = await this.roleService.findOneByRoleId(roleId);
    user.roles = [...user.roles, role];
    return this.usersRepository.save(user);
  }

  // 根据用户查询拥有的角色id和角色名称
  async findRolesByUser(phoneNumber: string): Promise<Partial<Role>[]> {
    const user = await this.findOneByPhone(phoneNumber);
    const roles = user.roles.map((role) => {
      return {
        roleId: role.roleId,
        roleName: role.roleName,
      };
    });
    return roles;
  }

  // 查询所有用户,不包含软删的,并把角色也查出来
  async findAll(): Promise<User[]> {
    const value = await this.usersRepository.find({
      relations: ['roles'],
      where: { isDeleted: 0 },
    });
    return value;
  }

  // 根据手机号查询用户,不包含软删的,并把角色也查出来
  async findOneByPhone(phoneNumber: string): Promise<User> {
    const value = await this.usersRepository.findOne({
      relations: ['roles'],
      where: { phoneNumber, isDeleted: 0 },
    });
    return value;
  }
}
