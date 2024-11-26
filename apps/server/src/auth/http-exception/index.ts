import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { GqlExceptionFilter } from '@nestjs/graphql';

@Catch(HttpException)
export class HttpExceptionFilter implements GqlExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse(); // This will not work in GraphQL context
        const status = exception.getStatus();

        // Instead of using response, format the error for GraphQL
        return {
            statusCode: status,
            timestamp: new Date().toISOString(),
            message: exception.message,
        };
    }
}