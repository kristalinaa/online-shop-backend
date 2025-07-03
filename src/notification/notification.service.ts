import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/user/entities/user.entity";
import { Repository } from "typeorm";
import { Notification } from "./entities/notification.entity";
import { NotificationsGateway } from "./websocket/websocket-gateway";

@Injectable()
export class NotificationsService {
  constructor(
    @InjectRepository(Notification)
    private readonly repo: Repository<Notification>,
    @InjectRepository(User)
    private readonly users: Repository<User>,
    @Inject(forwardRef(() => NotificationsGateway))
    private readonly gateway: NotificationsGateway,

  ) {}

  async create(dto: any): Promise<Notification> {
    const recipient = await this.users.findOneByOrFail({ id: dto.recipientId });

    const sender = dto.senderId
      ? await this.users.findOneByOrFail({ id: dto.senderId })
      : null;

    const notification = this.repo.create({
      message: dto.message,
      recipient,
      sender,
    });

    return this.repo.save(notification);
  }

  async markAsRead(id: number): Promise<void> {
    const notificationsPerUser = await this.findForUser(id)
    notificationsPerUser.forEach(async (notification) => {
      if (!notification.isRead) {
        notification.isRead = true;
        await this.repo.update(notification.id, { isRead: true });

      }})
  }

  async findForUser(userId: number) {
    return this.repo.find({
      where: { recipient: { id: userId } },
      relations: ['sender', 'recipient'],
      order: { createdAt: 'DESC' },
    });
  }


   async createAndDispatch(
    recipient: User,
    message: string,
    sender?: User | null,
  ) {

    console.log("Creating notification for recipient:", recipient, "with message:", message);
    console.log("Creating notification for sender:", sender, "with message:", message);

    const entity = this.repo.create({ recipient, message, sender: sender ?? null });
    const saved = await this.repo.save(entity);
    this.gateway.emitToUser(recipient.id, saved);
    return saved;
  }

  findUnread(recipientId: number) {
    return this.repo.find({ where: { recipient: { id: recipientId }, isRead: false } });
  }
}
