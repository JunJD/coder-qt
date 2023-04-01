import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './modules/auth/auth.module';
import { RoleModule } from './modules/role/role.module';
import { UsersModule } from './modules/users/users.module';
@Module({
  imports: [
    AuthModule,
    UsersModule,
    RoleModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Djj12345.',
      database: 'coder_qt',
      autoLoadEntities: true,
      // synchronize: true,
    }),
  ],
})
export class AppModule {}
