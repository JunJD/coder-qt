import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '../../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  // 创建用户
  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    // 通过手机号查询创建人
    const adminUser = await this.findOneByPhone(createUserDto.sub);
    user.phone = createUserDto.phone;
    user.userName = createUserDto.userName;
    user.password = createUserDto.password;
    user.createTime = new Date();
    user.updateTime = new Date();
    user.createUser = adminUser;
    user.updateUser = adminUser;
    return this.usersRepository.save(user);
  }

  // 查询所有用户,不包含软删的
  findAll(): Promise<User[]> {
    const queryBuilder = this.usersRepository.createQueryBuilder('user');
    return queryBuilder.where('user.is_deleted = 0').getMany();
  }

  // 根据手机号查询用户
  findOneByPhone(phone: string): Promise<User> {
    const queryBuilder = this.usersRepository.createQueryBuilder('user');
    return queryBuilder.where('user.user_id = :phone', { phone }).getOne();
  }

  // 根据手机号软删用户
  async removeByPhone(phone: string): Promise<void> {
    const user = await this.findOneByPhone(phone);
    user.isDeleted = 1;
    await this.usersRepository.save(user);
  }
}
