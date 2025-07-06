import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { ChatMessageService } from './chat-message.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { IGetUserAuthInfoRequest } from 'src/common/interceptor/test';

@UseGuards(JwtAuthGuard)
@Controller('chat-message')
export class ChatMessageController {
  constructor(private readonly chatMessageService: ChatMessageService) {}


}
