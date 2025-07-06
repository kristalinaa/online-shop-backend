import { forwardRef, Module } from '@nestjs/common';
import { ChatMessageService } from './chat-message.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatMessage } from './entities/chat-message.entity';
import { Conversation } from 'src/conversation/entities/conversation.entity';
import { ConversationModule } from 'src/conversation/conversation.module';
import { ConversationService } from 'src/conversation/conversation.service';
import { SocketAuthMiddleware } from 'src/auth/socket-middleware';
import { ChatGateway } from './chat-message.gateway';
import { AuthModule } from 'src/auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { ChatMessageController } from './chat-message.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([ChatMessage, Conversation]), JwtModule,
    AuthModule,
    ConversationModule
  ],
  controllers: [ChatMessageController],

  providers: [ChatMessageService, ChatGateway],
  exports: [ChatMessageService],
})
export class ChatModule { }