import {
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Injectable,
} from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class CurrentUserInterceptor implements NestInterceptor {
  constructor(private authService: AuthService) {}
  // handler refers to the route handler
  async intercept(context: ExecutionContext, handler: CallHandler) {
    const request = context.switchToHttp().getRequest();

    const token = request.headers.authorization?.split(' ')[1];
    if (token) {
      const user = this.authService.verifyToken(token);
      if (user) {
        request.currentUser = user;
      } else {
        request.currentUser = null;
      }
    } else {
      request.currentUser = null;
    }

    // run the actual route handler
    return handler.handle();
  }
}
