import { Column, Entity, OneToMany } from 'typeorm';
import { Common } from './common.entity';
import { UserRole } from './user-role.entity';

@Entity('sys_role')
export class Role extends Common {
  @Column({ unique: true, name: 'role_id', generated: 'uuid', nullable: false })
  roleId: string;

  @Column({ name: 'role_name' })
  roleName: string;

  @OneToMany(() => UserRole, (userRole) => userRole.roleId)
  userRoles: UserRole[];
}
