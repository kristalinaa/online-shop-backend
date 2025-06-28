import { Module } from '@nestjs/common';
import { NotificationController } from './notification.controller';
import { NotificationsService } from './notification.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Notification } from './entities/notification.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Notification, User])],
  exports: [NotificationsService],
  controllers: [NotificationController],
  providers: [NotificationsService],
})
export class NotificationModule {}
