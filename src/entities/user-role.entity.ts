import { Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Common } from './common.entity';
import { Role } from './role.entity';
import { User } from './user.entity';

@Entity('sys_user_role')
export class UserRole extends Common {
  @ManyToOne(() => User, (user) => user.userRoles)
  @JoinColumn({ name: 'user_id' })
  UserId: string;

  @ManyToOne(() => Role, (role) => role.userRoles)
  @JoinColumn({ name: 'role_id' })
  roleId: string;
}
