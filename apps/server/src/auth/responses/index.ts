import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class UserResponse {
    @Field()
    userId: number;

    @Field()
    email: string;

    @Field()
    role: string;

    @Field()
    firstName: string;

    @Field()
    lastName: string;

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;

    @Field()
    fullName: string;

    @Field()
    isEmailVerified: boolean;

    // Add any other non-sensitive fields you want to include in the user response
}


@ObjectType()
export class LoginResponse {
    @Field({ nullable: true })
    accessToken?: string;

    @Field({ nullable: true })
    error?: string;

    @Field(() => UserResponse, { nullable: true })
    user?: UserResponse;
}