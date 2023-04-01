import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  // PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('sys_user')
export class User {
  // @PrimaryGeneratedColumn('rowid')
  // id: number;

  @PrimaryColumn({ name: 'user_id' })
  phone: string;

  @Column({ name: 'user_name' })
  userName: string;

  @Column()
  password: string;

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

  @Column({ default: 0, name: 'is_deleted' })
  isDeleted: number;
  userId: any;
}
