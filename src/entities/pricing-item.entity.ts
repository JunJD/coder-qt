import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Pricing } from './pricing.entity';

@Entity('qt_pricing_item')
export class PricingItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'pricing_item_id' })
  pricingItemId: string;

  @Column({ name: 'pricing_item_name' })
  pricingItemName: string;

  @ManyToOne(() => Pricing, (pricing) => pricing.pricingItems)
  @JoinColumn({ name: 'pricing_id' })
  pricingId: string;
}
