// src/chat/entities/chat-message.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  Index,
} from 'typeorm';
import { User } from 'src/user/entities/user.entity';

@Entity('chat_messages')
export class ChatMessage {
  @PrimaryGeneratedColumn()
  id: number;

  /** Përmbajtja tekstuale e mesazhit */
  @Column({ type: 'varchar', length: 1000 })
  message: string;

  /** Përdoruesi që e ka dërguar mesazhin */
  @ManyToOne(() => User, (user) => user.messagesSent, { eager: true })
  @Index()
  sender: User;

  /** Përdoruesi që e merr mesazhin */
  @ManyToOne(() => User, (user) => user.messagesReceived, { eager: true })
  @Index()
  recipient: User;

  /** Flag që tregon nëse marrësi e ka lexuar mesazhin */
  @Column({ default: false })
  isRead: boolean;

  /** Data dhe ora kur mesazhi u krijua */
  @CreateDateColumn()
  createdAt: Date;
}
