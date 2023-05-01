import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Events } from './events.entity';

@Entity({ name: 'event_types' })
export class EventType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
    name: 'event_type_id',
    generated: 'uuid',
    nullable: false,
  })
  eventTypeId: string;

  @Column({ name: 'event_type_name', length: 100 })
  eventTypeName: string;

  // 事件主题色
  @Column({ name: 'event_theme_color', length: 100 })
  eventThemeColor: string;

  // 一对多（事件）
  @OneToMany(() => Events, (events) => events.eventType)
  events: Events[];
}
