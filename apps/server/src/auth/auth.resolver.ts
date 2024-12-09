import { LoginResponse } from './responses/index';
import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Auth } from './entities/auth.entity';
import { LoginInput, RegisterInput } from './dto/auth.input';
import { User } from 'src/entities/user.entity';
import { HttpException, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './guards/auth.guard';

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) { }
  @Mutation(() => String) // Indicate that the return type is a String
  async register(@Args('registerInput') registerInput: RegisterInput): Promise<any> {
    return await this.authService.register(registerInput)
  }

  @Mutation(() => String)
  async verification(@Args('token') token: string): Promise<string> {
    return await this.authService.verifyEmail(token)
  }
  @Mutation(() => LoginResponse)
  async login(@Args('loginInput') loginInput: LoginInput): Promise<LoginResponse> {
    const response = await this.authService.login(loginInput);
    return response; // Return the response directly
  }

  @Mutation(() => String)
  @UseGuards(JwtAuthGuard)
  async logout(): Promise<string> {
    return "Successfully logged out"; // Return a success message
  }

  @Query(() => String)
  @UseGuards(JwtAuthGuard) // Protect this route with JwtAuthGuard
  async getPrivateData(): Promise<string> {
    // This is a private route that requires authentication
    return "This is private data"; // Return some private data
  }
}
