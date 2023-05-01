import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Events } from './calendar/events.entity';
import { Role } from './role.entity';

@Entity('sys_user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'user_id' })
  phoneNumber: string;

  @Column({ name: 'user_name', length: 100 })
  @Index({ unique: true })
  userName: string;

  @Column()
  password: string;

  @ManyToMany(() => Role, (role) => role.users)
  @JoinTable({
    name: 'sys_user_role',
    joinColumn: { name: 'user_id' },
    inverseJoinColumn: { name: 'role_id' },
  }) // 告訴typeorm要建立join table
  roles: Role[];

  // 一对多（事件）
  @OneToMany(() => Events, (events) => events.user, { eager: true })
  events: Events[];

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
