import { Column, Entity, OneToMany } from 'typeorm';
import { Common } from './common.entity';
import { UserRole } from './user-role.entity';

@Entity('sys_user')
export class User extends Common {
  @Column({ name: 'user_id' })
  phoneNumber: string;

  @Column({ name: 'user_name' })
  userName: string;

  @Column()
  password: string;

  @OneToMany(() => UserRole, (userRole) => userRole.UserId)
  userRoles: UserRole[];
}
