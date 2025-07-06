import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Req, UseGuards } from '@nestjs/common';
import { ConversationService } from './conversation.service';
import { CreateConversationDto } from './dto/create-conversation.dto';
import { UpdateConversationDto } from './dto/update-conversation.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { IGetUserAuthInfoRequest } from 'src/common/interceptor/test';

@UseGuards(JwtAuthGuard)
@Controller('conversations')
export class ConversationController {
  constructor(private readonly conversationService: ConversationService) {}

  @Get('pair/:otherId')
  async getOrCreate(
    @Param('otherId', ParseIntPipe) otherId: number,
    @Req() req: IGetUserAuthInfoRequest
  ) {
    let user = req.user as any;

    const meId = user.userId;
    const convo = await this.conversationService.getOrCreate(meId, otherId);
    return { conversationId: convo.id };
  }


  @Get('mine')
  findMine(@Req() req: IGetUserAuthInfoRequest) {
    const userId = req.user.userId;
    return this.conversationService.findAllForUser(userId);
  }
}
