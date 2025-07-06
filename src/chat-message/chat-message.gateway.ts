import { WebSocketGateway, OnGatewayConnection, OnGatewayDisconnect, WebSocketServer, SubscribeMessage, ConnectedSocket, MessageBody } from "@nestjs/websockets";
import { Server, Socket } from "socket.io";
import { SocketAuthMiddleware } from "src/auth/socket-middleware";
import { ChatMessageService } from "./chat-message.service";
import { ChatMessage } from "./entities/chat-message.entity";
import { forwardRef, Inject } from "@nestjs/common";

// src/chat/chat.gateway.ts
@WebSocketGateway(3001, { cors: { origin: '*' } })
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer() server: Server;

    constructor(
        @Inject(forwardRef(() => ChatMessageService))
        private readonly messageSvc: ChatMessageService,
        private authMw: SocketAuthMiddleware,
    ) { }

    emitMessage(convId: string, msg: ChatMessage) {
        console.log('ChatGateway.emitMessage', convId, msg);
        this.server.to(`${convId}`).emit('chat:new', msg);
        console.log(`Emitting to conversation ${convId}:`, msg);
    }
    afterInit(server: Server) {
        server.use(this.authMw.use);
    }


    handleConnection(client: Socket) {
        const { user } = client.data;
        // console.log("user chat: ", user)

        // client.join(`user-${user.sub}`);
    }


    /** Klienti i bashkohet dhomës së bisedës */
    @SubscribeMessage('chat:join')
    onJoin(
        @ConnectedSocket() client: Socket,
        @MessageBody() payload: { convId: string },
    ) {
        client.join(payload.convId);              // ← real room id (15-16)
    }


    @SubscribeMessage('chat:send')
    async onSend(client, payload: { recipientId: number; text: string }) {
        const sender = client.data.user;
        console.log('onSend', sender.sub, payload);
        await this.messageSvc.send(sender.sub, payload.recipientId, payload.text);
    }

    @SubscribeMessage('chat:history')
    async onHistory(
        @ConnectedSocket() client: Socket,
        @MessageBody() payload: { withUser: string }  // actually convId
    ) {
        const { user } = client.data;
        const convId = payload.withUser; // or rename to 'convId' to avoid confusion


        const messages = await this.messageSvc.findMessages(convId,user.sub);
        await this.messageSvc.markAsRead(convId, user.sub);


        client.emit('chat:history', messages);
    }

    handleDisconnect(client: Socket) {
        const uid = client.data?.user?.sub;
        if (uid) client.leave(`user-${uid}`);
    }
}
