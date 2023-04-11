// import {
//   Column,
//   CreateDateColumn,
//   Entity,
//   JoinColumn,
//   ManyToOne,
//   PrimaryGeneratedColumn,
//   UpdateDateColumn,
// } from 'typeorm';
// import { Pricing } from './pricing.entity';

// @Entity('qt_pricing_items')
// export class PricingItem {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column({ name: 'pricing_item_id' })
//   pricingItemId: string;

//   @Column({ name: 'pricing_item_name' })
//   pricingItemName: string;

//   @ManyToOne(() => Pricing, (pricing) => pricing.pricingItems)
//   @JoinColumn({ name: 'pricing_id' })
//   pricingId: string;

//   @Column({ name: 'create_user' })
//   creatorId: string;

//   @Column({ name: 'update_user' })
//   updaterId: string;

//   @CreateDateColumn({
//     name: 'create_time',
//     type: 'timestamp',
//     comment: '创建时间',
//   })
//   createTime!: Date;

//   @UpdateDateColumn({
//     name: 'update_time',
//     type: 'timestamp',
//     comment: '创建时间',
//   })
//   updateTime!: Date;

//   @Column({ default: 0, name: 'is_deleted' })
//   isDeleted: number;
// }
