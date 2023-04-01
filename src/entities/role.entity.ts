import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity('sys_role')
export class Role {
  @PrimaryGeneratedColumn({ name: 'role_id' })
  roleId: string;

  @Column({ name: 'role_name' })
  roleName: string;

  @ManyToOne(() => User, (update_user) => update_user.userId)
  @JoinColumn({ name: 'create_user' })
  createUser: User;

  @CreateDateColumn({ name: 'create_time' })
  createTime!: Date;

  @ManyToOne(() => User, (update_user) => update_user.userId)
  @JoinColumn({ name: 'update_user' })
  updateUser: User;

  @UpdateDateColumn({ name: 'update_time' })
  updateTime!: Date;

  // 0:未删除 1:已删除
  @Column({ default: 0, name: 'is_deleted' })
  isDeleted: number;
}
