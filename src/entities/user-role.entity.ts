import { Column, Entity } from 'typeorm';
import { Common } from './common.entity';

@Entity('sys_user_role')
export class UserRole extends Common {
  @Column({ name: 'user_id' })
  UserId: string;

  @Column({ name: 'role_id' })
  roleId: string;
}
