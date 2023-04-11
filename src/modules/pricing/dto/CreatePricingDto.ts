import { IsString, IsInt } from 'class-validator';
export class CreatePricingDto {
  @IsString()
  pricingId?: string;
  @IsString()
  pricingName?: string;
  @IsInt()
  isDeleted?: number;
  // 这里的sub是指创建人的手机号，是从token中获取的
  @IsString()
  sub?: string;
}
