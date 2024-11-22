import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Auth } from './entities/auth.entity';
import { RegisterInput } from './dto/auth.input';
import { User } from 'src/entities/user.entity';

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) { }
  @Mutation(() => String) // Indicate that the return type is a String
  async register(@Args('registerInput') registerInput: RegisterInput): Promise<any> {
    return await this.authService.register(registerInput)

  }

}
