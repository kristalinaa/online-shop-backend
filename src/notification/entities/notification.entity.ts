import { User } from 'src/user/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';

@Entity()
export class Notification {
  @PrimaryGeneratedColumn()
  id: number;

  /** Main text or payload */
  @Column({ type: 'varchar', length: 255 })
  message: string;

  /** NULL ⇒ system-generated */
  @ManyToOne(() => User, user => user.notificationsSent, { nullable: true })
  sender: User | null;

  /** Required recipient */
  @ManyToOne(() => User, user => user.notificationsReceived, { eager: true })
  recipient: User;

  /** Whether the user has opened it */
  @Column({ default: false })
  isRead: boolean;

  @CreateDateColumn()
  createdAt: Date;
}
