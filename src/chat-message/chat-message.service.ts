import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CreateChatMessageDto } from './dto/create-chat-message.dto';
import { UpdateChatMessageDto } from './dto/update-chat-message.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { ChatMessage } from './entities/chat-message.entity';
import { ConversationService } from 'src/conversation/conversation.service';
import { ChatGateway } from './chat-message.gateway';

@Injectable()
export class ChatMessageService {
  constructor(
    @InjectRepository(ChatMessage)
    private readonly repo: Repository<ChatMessage>,
    private readonly convSvc: ConversationService,
    @Inject(forwardRef(() => ChatGateway))
    private readonly gateway: ChatGateway,         // për emit-im realtime
  ) { }

  /** Dërgo mesazh dhe kthe objektin e ruajtur */
  async send(
    sender: number,
    recipient: number,
    text: string,
  ): Promise<ChatMessage> {

    console.log('ChatMessageService.send', sender, recipient, text);
    const conv = await this.convSvc.getOrCreate(sender, recipient);
    const [senderUser, recipientUser] = await Promise.all([
      this.repo.manager.findOne(User, { where: { id: sender } }), 
      this.repo.manager.findOne(User, { where: { id: recipient } }),
    ]);

    console.log('ChatMessageService.send', conv, senderUser, recipientUser);
    if (!senderUser || !recipientUser) {
      throw new Error('Sender or recipient not found');
    }
    const entity = await this.repo.create({
      conversation: conv,
      sender: senderUser,
      recipient: recipientUser,
      body: text,
      isRead: false,

    });

    const saved = await this.repo.save(entity);

    // njofto të dy palët në dhomën e bisedës
    this.gateway.emitMessage(conv.id, saved);

    return saved;
  }

 async findMessages(conversationId: string, currentUserId: number, skip = 0, take = 50) {
  const messages = await this.repo.find({
    where: { conversation: { id: conversationId } },
    order: { createdAt: 'ASC' },
    skip,
    take,
    relations: ['sender', 'recipient'],
  });
  console.log('ChatMessageService.findMessages',  messages);
  return messages.map(m => ({
    ...m,
    mine: m.sender.id == currentUserId,
  }));
}


  /** Shëno si të lexuara të gjitha mesazhet e palexuara të marrësit */
  async markAsRead(conversationId: string, readerId: number) {
    await this.repo
      .createQueryBuilder()
      .update()
      .set({ isRead: true })
      .where('conversationId = :cid', { cid: conversationId })
      .andWhere('recipientId = :uid', { uid: readerId })
      .execute();
  }
}
