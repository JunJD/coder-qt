import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pricing } from 'src/entities/pricing.entity';
import { Repository } from 'typeorm';
import { CreatePricingDto } from './dto/CreatePricingDto';

@Injectable()
export class PricingService {
  constructor(
    @InjectRepository(Pricing)
    private readonly pricingRepository: Repository<Pricing>,
  ) {}
  // 创建报价类
  async create(createPricingDto: CreatePricingDto): Promise<Pricing> {
    const pricing = new Pricing();
    pricing.pricingId = createPricingDto.pricingId;
    pricing.pricingName = createPricingDto.pricingName;
    pricing.isDeleted = createPricingDto.isDeleted;
    pricing.creatorId = createPricingDto.sub;
    return this.pricingRepository.save(pricing);
  }
}
