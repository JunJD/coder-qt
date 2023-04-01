import { IsString, IsInt } from 'class-validator';
export class CreateUserDto {
  @IsString()
  phone: string;
  @IsString()
  userName?: string;
  @IsString()
  password: string;
  @IsInt()
  isDeleted?: number;
}
