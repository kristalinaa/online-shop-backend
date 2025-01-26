import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';
import { EntityNotFoundError } from 'typeorm';
import { ErrorMessage } from '../enum/error.message';

@Catch(EntityNotFoundError)
export class EntityNotFoundErrorFilter implements ExceptionFilter {
  catch(exception: EntityNotFoundError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    // const status = exception.;

    response
      .status(404)
      .json({
        statusCode: 404,
        timestamp: new Date().toISOString(),
        path: request.url,
        error: "",
        message: ErrorMessage.NOT_FOUND_RESOURCE
      });
  }
}