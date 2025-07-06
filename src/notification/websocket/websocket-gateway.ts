import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import {
  Inject, forwardRef
} from '@nestjs/common';
import { NotificationsService } from '../notification.service';
import { SocketAuthMiddleware } from 'src/auth/socket-middleware';

@WebSocketGateway(3001, { cors: { origin: '*' } })
export class NotificationsGateway
  implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  constructor(
    @Inject(forwardRef(() => NotificationsService))
    private readonly notificationsSvc: NotificationsService,

    private readonly socketAuth: SocketAuthMiddleware, 

  ) { }

  afterInit(server: Server) {
    server.use(this.socketAuth.use);               
  }

  async handleConnection(client: Socket) {
    const { user } = client.data;
    console.log("user notification: ", user)       
    client.join(user.sub.toString());         
    const unread = await this.notificationsSvc.findUnread(user.sub);
    if (unread.length) client.emit('notification:list', unread);
  }
  handleDisconnect(client: Socket) {
    const user = client.data.user;        
    if (user) {
      client.leave(user.sub.toString());  
      console.log(`🔌 Socket for user ${user.sub} disconnected`);
    }
  }
  emitToUser(userId: number, dto: any) {
    this.server.to(userId.toString()).emit('notification:new', dto);
    console.log(`Emitting to user ${userId}:`, dto);

  }
}