import { Module } from '@nestjs/common';
import { ConversationService } from './conversation.service';
import { ConversationController } from './conversation.controller';
import { Type } from 'class-transformer';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Conversation } from './entities/conversation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Conversation])],
  exports: [ConversationService],
  controllers: [ConversationController],
  providers: [ConversationService],
})
export class ConversationModule {}
