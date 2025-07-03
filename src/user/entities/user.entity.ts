import { Bag } from 'src/bag/entities/bag.entity';
import { BankAccount } from 'src/bank-account/entities/bank-account.entity';
import { ChatMessage } from 'src/chat-message/entities/chat-message.entity';
import { Checkout } from 'src/checkout/entities/checkout.entity';
import { Notification } from 'src/notification/entities/notification.entity';
import { Product } from 'src/product/entities/product.entity';
import { UserStatus } from 'src/role/role.enum';
import { UserRole } from 'src/user-role/entities/user-role.entity';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => BankAccount, (bankAccount) => bankAccount.user)
  bankAccounts?: BankAccount[];

  @OneToMany(() => Checkout, (checkout) => checkout.user)
  checkouts?: Checkout[];

  @OneToMany(() => Product, (product) => product.user)
  products?: Product[];

  @OneToMany(() => UserRole, (userRole) => userRole.user)
  userRoles: UserRole[];

  @Column({
    type: 'enum',
    enum: UserStatus,
    default: UserStatus.APPROVED,
  })
  status: UserStatus;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => Bag, bag => bag.user)
  bag: Bag[];

  /** Notifications I have received */
  @OneToMany(() => Notification, n => n.recipient)
  notificationsReceived: Notification[];

  /** Notifications I have sent (as the actor) */
  @OneToMany(() => Notification, n => n.sender)
  notificationsSent: Notification[];


  @OneToMany(() => ChatMessage, (m) => m.sender)
  messagesSent: ChatMessage[];

  @OneToMany(() => ChatMessage, (m) => m.recipient)
  messagesReceived: ChatMessage[];
}
