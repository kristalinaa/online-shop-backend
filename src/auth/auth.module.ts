import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { UserRoleModule } from 'src/user-role/user-role.module';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { JwtWsGuard } from './jwt-ws.guard';
import { SocketAuthMiddleware } from './socket-middleware';
@Module({
  imports: [
    UserModule,
    PassportModule,
    UserRoleModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '60d' },
    }),
  ],
  exports: [SocketAuthMiddleware],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy,SocketAuthMiddleware],
})
export class AuthModule {}
