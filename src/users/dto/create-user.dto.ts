import { IsString, IsInt } from 'class-validator';
import { User } from 'src/entities/user.entity';
export class CreateUserDto {
  @IsString()
  phone: string;
  @IsString()
  userName?: string;
  @IsString()
  password: string;
  @IsInt()
  isDeleted?: number;
  // 这里的sub是指创建人的手机号，是从token中获取的
  @IsString()
  sub?: User['phone'];
}
