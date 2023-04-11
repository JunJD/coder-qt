import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity('sys_role')
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, name: 'role_id', generated: 'uuid', nullable: false })
  roleId: string;

  @Column({ name: 'role_name', length: 100 })
  roleName: string;

  @ManyToMany(() => User, (user) => user.roles)
  users: User[];

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
