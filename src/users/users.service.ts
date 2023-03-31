import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.phone = createUserDto.phone;
    user.userName = createUserDto.userName;
    user.password = createUserDto.password;
    user.createTime = new Date();

    return this.usersRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    console.log(this.usersRepository.find());

    return this.usersRepository.find();
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
