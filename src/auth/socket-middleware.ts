import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Socket } from "socket.io";

@Injectable()
export class SocketAuthMiddleware {
  constructor(private readonly jwt: JwtService) {}

  use = (socket: Socket, next: (err?: Error) => void) => {
    const token =
      socket.handshake.auth?.token ||          
      socket.handshake.query?.token;        

    if (!token) return next(new Error('No token'));
    try {
      const decoded = this.jwt.verify(token); 
      console.log("Decoded JWT payload:", decoded); 
      socket.data.user = decoded;              
      next();
    } catch (err) {
      console.warn('Invalid JWT token in WebSocket:', err.message);
      next(new Error('Invalid token1'));
    }
  };
}


