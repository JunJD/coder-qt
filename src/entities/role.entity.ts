import { Column, Entity } from 'typeorm';
import { Common } from './common.entity';

@Entity('sys_role')
export class Role extends Common {
  @Column({ unique: true, name: 'role_id', generated: 'uuid', nullable: false })
  roleId: string;

  @Column({ name: 'role_name' })
  roleName: string;
}
