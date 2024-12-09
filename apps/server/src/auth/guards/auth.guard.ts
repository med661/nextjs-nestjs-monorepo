// import { Injectable, ExecutionContext } from '@nestjs/common';
// import { AuthGuard } from '@nestjs/passport';
// import { GqlExecutionContext } from '@nestjs/graphql';

// @Injectable()
// export class JwtAuthGuard extends AuthGuard('jwt') {
//     getRequest(context: ExecutionContext) {
//         const ctx = GqlExecutionContext.create(context);
//         return ctx.getContext().req;
//     }
// }
import { Injectable, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
    getRequest(context: ExecutionContext) {
        const ctx = GqlExecutionContext.create(context);
        return ctx.getContext().req;
    }

    handleRequest(err, user, info) {
        // You can throw an exception based on passed info
        if (err || !user) {
            throw new UnauthorizedException('Invalid or expired token');
        }
        return user;
    }
}