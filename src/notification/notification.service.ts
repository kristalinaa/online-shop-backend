import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/user/entities/user.entity";
import { Repository } from "typeorm";
import { Notification } from "./entities/notification.entity";

// src/notifications/notifications.service.ts
@Injectable()
export class NotificationsService {
  constructor(
    @InjectRepository(Notification)
    private readonly repo: Repository<Notification>,
    @InjectRepository(User)
    private readonly users: Repository<User>,
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
    await this.repo.update(id, { isRead: true });
  }

  findForUser(userId: number) {
    return this.repo.find({
      where: { recipient: { id: userId } },
      order: { createdAt: 'DESC' },
    });
  }
}
