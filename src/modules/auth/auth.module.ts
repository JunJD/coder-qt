import { Global, Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module';
import { AuthController } from './auth.controller';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';

// 全局模块
@Global()
@Module({
  imports: [
    UsersModule,
    // 导入jwt模块,并配置,global: true表示全局模块,所有模块都可以使用
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [
    AuthController,
    AuthService,
    // 全局守卫，所有路由都会被守卫拦截
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
  controllers: [AuthController],
  // 导出服务，方便其他模块使用
  exports: [AuthService, AuthController],
})
export class AuthModule {}
