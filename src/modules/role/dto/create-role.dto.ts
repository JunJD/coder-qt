import { IsString, IsInt } from 'class-validator';
export class CreateRoleDto {
  @IsString()
  roleId?: string;
  @IsString()
  roleName?: string;
  @IsInt()
  isDeleted?: number;
  // 这里的sub是指创建人的手机号，是从token中获取的
  @IsString()
  sub?: string;
}
