import {
  Column,
  CreateDateColumn,
  Entity,
  // ManyToOne,
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

  // @ManyToOne(() => User, (update_user) => update_user.phone)
  // create_user: User;

  @CreateDateColumn({ name: 'create_time' })
  createTime!: Date;

  // @ManyToOne(() => User, (update_user) => update_user.phone)
  // update_user: User;

  @UpdateDateColumn({ name: 'update_time' })
  updateTime!: Date;

  @Column({ default: 0, name: 'is_deleted' })
  isDeleted: number;
  userId: any;
}
