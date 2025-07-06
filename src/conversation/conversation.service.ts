import { Injectable } from '@nestjs/common';
import { CreateConversationDto } from './dto/create-conversation.dto';
import { UpdateConversationDto } from './dto/update-conversation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { Conversation } from './entities/conversation.entity';
import { ChatMessage } from 'src/chat-message/entities/chat-message.entity';

@Injectable()
export class ConversationService {
  constructor(
    @InjectRepository(Conversation)
    private readonly repo: Repository<Conversation>,
  ) { }

  /** Kthen - ose krijon - bisedën unike të çiftit (A,B) */
  async getOrCreate(a: number, b: number): Promise<Conversation> {
    const [userA, userB] = await Promise.all([
      this.repo.manager.findOne(User, { where: { id: a } }),
      this.repo.manager.findOne(User, { where: { id: b } }),
    ]);
    console.log('getOrCreate conversation for users', a, b, userA, userB);
    if (a === b)
      throw new Error('Cannot start a conversation with yourself');

    const existing = await this.repo.findOne({
      where: [
        { participantA: userA, participantB: userB },
        { participantA: userB, participantB: userA },
      ],
    });
    if (existing) return existing;

    return this.repo.save(this.repo.create({id: this.makeConvId(a,b), participantA: userA, participantB: userB }));
  }

  /** Të gjitha bisedat e një përdoruesi – me 1 query */
  findForUser(userId: number) {
    return this.repo
      .createQueryBuilder('c')
      .leftJoinAndSelect('c.participantA', 'a')
      .leftJoinAndSelect('c.participantB', 'b')
      .leftJoinAndSelect('c.messages', 'm')
      .where('a.id = :id OR b.id = :id', { id: userId })
      .orderBy('c.updatedAt', 'DESC')
      .getMany();
  }


async findAllForUser(userId: number) {
  const conversations = await this.repo
    .createQueryBuilder('c')
    .leftJoinAndSelect('c.participantA', 'a')
    .leftJoinAndSelect('c.participantB', 'b')
    .where('a.id = :uid OR b.id = :uid', { uid: userId })
    .getMany();

  //  Count unread messages with a single, lean SQL "COUNT"
  return Promise.all(
    conversations.map(async (c) => {
      const peer =
        c.participantA.id === userId ? c.participantB : c.participantA;

      const unread = await this.repo.manager
        .createQueryBuilder()                     // use the manager, not repository
        .select('COUNT(1)', 'cnt')
        .from(ChatMessage, 'm')
        .where(
          'm.conversationId = :cid AND m.recipientId = :uid AND m.isRead = false',
          { cid: c.id, uid: userId },
        )
        .getRawOne<{ cnt: string }>()              // returns { cnt: '4' }
        .then((r) => Number(r.cnt));

      return {
        convId: c.id,
        peerId: peer.id,
        peer,
        unread,
      };
    }),
  );
}


  makeConvId(id1: number, id2: number): string {
    // always put the smaller ID first so "4-15" === "15-4"
    return id1 < id2 ? `${id1}-${id2}` : `${id2}-${id1}`;
  }
}