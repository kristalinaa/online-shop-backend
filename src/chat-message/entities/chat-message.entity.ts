// src/chat/entities/chat-message.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  Index,
  PrimaryColumn,
} from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { Conversation } from 'src/conversation/entities/conversation.entity';

@Entity('chat_messages')
export class ChatMessage {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Conversation, c => c.messages)
  conversation: Conversation;

/** përdoruesi që dërgon */
  @ManyToOne(() => User, u => u.messagesSent, { eager: true })
  sender: User;

  /** përdoruesi që merr */
  @ManyToOne(() => User, u => u.messagesReceived, { eager: true })
  recipient: User;

  /** teksti i mesazhit */
  @Column({ type: 'text' })
  body: string;

  /** lexuar / jo-lexuar nga marrësi */
  @Column({ default: false })
  isRead: boolean;

  @CreateDateColumn()
  createdAt: Date;
}