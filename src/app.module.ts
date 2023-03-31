import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
@Module({
  imports: [
    UsersModule,
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
