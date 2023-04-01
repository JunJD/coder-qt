import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  // 创建用户
  create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.phone = createUserDto.phone;
    user.userName = createUserDto.userName;
    user.password = createUserDto.password;
    user.createTime = new Date();

    return this.usersRepository.save(user);
  }

  // 查询所有用户
  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }
  // 根据手机号查询用户
  async findOneByPhone(phone: string): Promise<User> {
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
