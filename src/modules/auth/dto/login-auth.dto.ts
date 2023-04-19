import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from 'src/modules/users/dto/create-user.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
export class LoginAuthDto extends PartialType(CreateUserDto) {
  @ApiProperty()
  @IsNotEmpty()
  phoneNumber: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;
}
