import { Column, Entity } from 'typeorm';
import { Common } from './common.entity';

@Entity('sys_user')
export class User extends Common {
  @Column({ name: 'user_id' })
  phoneNumber: string;

  @Column({ name: 'user_name' })
  userName: string;

  @Column()
  password: string;
}
