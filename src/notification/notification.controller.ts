import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { NotificationsService } from './notification.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { IGetUserAuthInfoRequest } from 'src/common/interceptor/test';

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationsService) {}

  @Post()
  create(@Body() createNotificationDto: CreateNotificationDto) {
    return this.notificationService.create(createNotificationDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('per-user')
  findAllPerUser(  @Req() req: IGetUserAuthInfoRequest ) {
        let user = req.user as any;

    return this.notificationService.findForUser(user.userId);
  }


  @UseGuards(JwtAuthGuard)
  @Post('mark-as-read')
  markAsRead(  @Req() req: IGetUserAuthInfoRequest ) {
        let user = req.user as any;

    return this.notificationService.markAsRead(user.userId);
  }
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.notificationService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateNotificationDto: UpdateNotificationDto) {
  //   return this.notificationService.update(+id, updateNotificationDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.notificationService.remove(+id);
  // }
}
