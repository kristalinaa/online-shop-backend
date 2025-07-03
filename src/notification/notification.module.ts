import { forwardRef, Module } from '@nestjs/common';
import { NotificationController } from './notification.controller';
import { NotificationsService } from './notification.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Notification } from './entities/notification.entity';
import { NotificationsGateway } from './websocket/websocket-gateway';
import { AuthModule } from 'src/auth/auth.module';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [TypeOrmModule.forFeature([Notification, User]), AuthModule, JwtModule],
  exports: [NotificationsService],
  controllers: [NotificationController],
  providers: [
  NotificationsService,
  NotificationsGateway
],
})
export class NotificationModule {}
