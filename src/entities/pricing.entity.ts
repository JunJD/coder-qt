import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PricingItem } from './pricing-item.entity';

@Entity('qt_pricing')
export class Pricing {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'pricing_id' })
  pricingId: string;

  @Column({ name: 'pricing_name' })
  pricingName: string;

  @OneToMany(() => PricingItem, (pricingItem) => pricingItem.pricingId)
  pricingItems: PricingItem[];
}
