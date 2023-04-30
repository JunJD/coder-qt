import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './../user.entity';
import { EventType } from './eventType.entity';

@Entity('sys_events')
export class Events {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
    name: 'event_id',
    generated: 'uuid',
    nullable: false,
  })
  eventId: string;

  @Column({ name: 'event_name', length: 100 })
  eventsName: string;

  @Column({ name: 'start_date_time' })
  startDateTime: Date;

  @Column({ name: 'end_date_time' })
  endDateTime: Date;

  // 事件类型
  @ManyToOne(() => EventType, (eventType) => eventType.events)
  @JoinColumn({ name: 'event_type_id' })
  eventType: EventType;

  // 事件地点
  @Column()
  location: string;

  // 事件描述
  @Column()
  description: string;

  // 事件状态
  @Column()
  status: string;

  // 事件创建者
  @ManyToOne(() => User, (user) => user.events)
  @JoinColumn({ name: 'create_user' })
  creator: User;

  // 事件更新者
  @ManyToOne(() => User, (user) => user.events)
  @JoinColumn({ name: 'update_user' })
  updater: User;

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

  @ManyToOne(() => User, (user) => user.events)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
