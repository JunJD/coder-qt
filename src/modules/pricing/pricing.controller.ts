import { Controller, Post, Req } from '@nestjs/common';
import { Pricing } from 'src/entities/pricing.entity';
import { CreatePricingDto } from './dto/CreatePricingDto';
import { PricingService } from './pricing.service';

@Controller('pricing')
export class PricingController {
  constructor(readonly pricingService: PricingService) {}

  // 创建报价类
  @Post('create')
  async create(@Req() req): Promise<Pricing> {
    const createPricingDto: CreatePricingDto = req.body;
    return this.pricingService.create({
      ...createPricingDto,
      // 这里的sub是指创建人的手机号，是从token中获取的
      sub: req.user.sub,
    });
  }
}
