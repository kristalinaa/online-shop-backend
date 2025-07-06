import { ChatMessage } from "src/chat-message/entities/chat-message.entity";
import { User } from "src/user/entities/user.entity";
import { Entity, PrimaryColumn, ManyToMany, JoinTable, OneToMany, UpdateDateColumn, Column, Index, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('conversations')
@Index(['participantA', 'participantB'], { unique: true })    // siguron 1 dhome / çift
export class Conversation {
  /** Formë `pair-4-15` → më i vogli përpara  (string për unikitet global) */
  @PrimaryColumn()
  id: string;

  @ManyToOne(() => User, { eager: true })
  participantA: User;

  @ManyToOne(() => User, { eager: true })
  participantB: User;

  @OneToMany(() => ChatMessage, m => m.conversation)
  messages: ChatMessage[];

  /** Për renditje në sidebar-in e bisedave */
  @UpdateDateColumn()
  updatedAt: Date;
}