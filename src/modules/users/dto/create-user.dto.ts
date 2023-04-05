import { IsString, IsInt } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly phoneNumber: string;

  @IsString()
  readonly userName?: string;

  @IsString()
  readonly password: string;

  @IsInt()
  readonly isDeleted?: number;

  // 这里的sub是指创建人的手机号，是从token中获取的
  @IsString()
  sub?: string;

  @IsString()
  readonly roleId?: string;
}
