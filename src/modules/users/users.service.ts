import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '../../entities/user.entity';
import { UserRole } from '../../entities/user-role.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    @InjectRepository(UserRole)
    private readonly userRoleRepository: Repository<UserRole>,
  ) {}

  // 创建用户
  async create(createUserDto: CreateUserDto): Promise<User> {
    return this.usersRepository.save({
      ...createUserDto,
      // 这里的sub是指创建人的手机号，是从token中获取的
      creatorId: createUserDto.sub,
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
