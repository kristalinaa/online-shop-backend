// src/auth/guards/jwt-ws.guard.ts
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class JwtWsGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const client = context.switchToWs().getClient<any>();

    // Support token in 'auth', 'query', or 'headers'
    const token =
      client.handshake?.auth?.token ||
      client.handshake?.query?.token ||
      (client.handshake?.headers?.authorization || '').replace('Bearer ', '');

    if (!token) {
      console.warn('❌ No token provided in socket handshake');
      return false;
    }

    try {
      const payload = await this.jwtService.verifyAsync(token);
      client.user = payload; // 👈 this is what your Gateway expects
      return true;
    } catch (err) {
      console.warn('❌ Invalid JWT token in WebSocket:', err.message);
      return false;
    }
  }
}
