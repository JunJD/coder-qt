import {
  Column,
  CreateDateColumn,
  Entity,
  // OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
// import { PricingItem } from './pricing-item.entity';

@Entity('qt_pricing')
export class Pricing {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'pricing_id' })
  pricingId: string;

  @Column({ name: 'pricing_name' })
  pricingName: string;

  // @OneToMany(() => PricingItem, (pricingItem) => pricingItem.pricingId)
  // pricingItems: PricingItem[];

  @Column({ name: 'create_user' })
  creatorId: string;

  @Column({ name: 'update_user' })
  updaterId: string;

  @CreateDateColumn({
    name: 'create_time',
    type: 'timestamp',
    comment: '创建时间',
  })
  createTime!: Date;

  @UpdateDateColumn({
    name: 'update_time',
    type: 'timestamp',
    comment: '创建时间',
  })
  updateTime!: Date;

  @Column({ default: 0, name: 'is_deleted' })
  isDeleted: number;
}
