import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class CustomInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const actualProfile = request.headers['actual-profile'];

    console.log('Actual Profile header:', actualProfile);

    // You can modify the request here if needed
    if (!actualProfile) {
      console.log('Actual Profile Header not provided');
    }

    return next.handle().pipe(
      tap((response) => {
        // Modify or log the response if needed
        console.log('Response:', response);
      }),
    );
  }
}
