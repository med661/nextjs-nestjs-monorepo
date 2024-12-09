import { BadRequestException, ConflictException, HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginInput, RegisterInput } from './dto/auth.input';
import { EmailService } from 'src/services/email.service';
import { User } from 'src/entities/user.entity';
import { verificationEmailHtml } from 'src/services/templates/email.template'; // Import the email template
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';
import { ConfigService } from '@nestjs/config';
import { TokenPayload } from './interfaces';
import { LoginResponse, UserResponse } from './responses';



@Injectable()
export class AuthService {
  constructor(
    private emailService: EmailService,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private jwtService: JwtService,
    private configService: ConfigService,


  ) { }
  async register(registerInput: RegisterInput): Promise<string> {
    try {

      let existUser = await this.userRepository.findOne({ where: { email: registerInput.email } })
      if (existUser) {
        throw new Error("User already exists"); // Throw an error instead of returning an object
      }
      let token = this.generateVerificationToken(registerInput);
      console.log(existUser)
      await this.emailService.sendWelcomeEmail(registerInput.email,
        'Welcome! Please verify your email'
        , verificationEmailHtml(registerInput.email, token))
      return 'Verification email sent'
    } catch (error) {
      throw new Error(error.message)

    }
  }



  async verifyEmail(token: string): Promise<string> {
    try {
      // First verify the token
      const secret = this.configService.get<string>('VERIFICATION_EMAIL_SECRET');
      const decoded = await this.jwtService.verify(token, { secret });

      if (decoded.exp && Date.now() >= decoded.exp * 1000) {
        throw new HttpException('Token has expired please Signup again', HttpStatus.BAD_REQUEST);
      }


      if (!decoded || !decoded.registerInput) {
        throw new Error('Invalid verification token');
      }

      const { registerInput } = decoded;

      // First try to find an existing user
      const existingUser = await this.userRepository.findOne({
        where: { email: registerInput.email },
        select: ['id', 'isEmailVerified', 'email'] // Only select needed fields
      });
      if (existingUser) {
        if (existingUser.isEmailVerified) {
          throw new BadRequestException('Email already verified');
        }
        throw new ConflictException('User already exists but not verified. Please try again.');
      }

      // If no user exists, create a new one
      try {
        const hashedPassword = await this.hashPassword(registerInput.password);

        const newUser = this.userRepository.create({
          email: registerInput.email,
          firstName: registerInput.firstName,
          lastName: registerInput.lastName,
          fullName: `${registerInput.firstName} ${registerInput.lastName}`,
          password: hashedPassword,
          isEmailVerified: true,
        });

        await this.userRepository.save(newUser);
        return 'Email verified and user registered successfully';

      } catch (error) {
        // Handle unique constraint violation
        if (error.code === '23505') { // PostgreSQL unique violation code
          // Do one final check in case of race condition
          const finalCheck = await this.userRepository.findOne({
            where: { email: registerInput.email },
            select: ['isEmailVerified']
          });

          if (finalCheck?.isEmailVerified) {
            return 'Email already verified please login';
          }

          throw new ConflictException('User already exists but not verified. Please request a new verification email.');
        }

        throw error;
      }
    } catch (error) {
      if (error.name === 'TokenExpiredError') {
        throw new Error('Verification token has expired');
      }
      if (error.name === 'JsonWebTokenError') {
        throw new Error('Invalid verification token');
      }
      // If it's already a known error, rethrow it
      if (error instanceof ConflictException || error.message) {
        throw error;
      }
      // Otherwise, throw a generic error
      throw new Error('Verification failed. Please try again.');
    }
  }



  async login(loginInput: LoginInput): Promise<LoginResponse> {
    try {


      const { email, password } = loginInput;

      const user = await this.userRepository.findOne({
        where: { email },
      });

      if (!user) {
        console.log("usern not foud")

        throw new Error("user not found")

      }

      if (!user.isEmailVerified) {
        return { error: 'Please verify your email before logging in' }; // Return error message
      }

      const isPasswordValid = await this.verifyPassword(user.password, password);
      if (!isPasswordValid) {
        throw new Error('Password is incorrect')// Return error message
      }

      const accessToken = this.generateAccessToken(user);
      const { password: _, ...userWithoutPassword } = user;

      return {
        accessToken,
        user: { userId: user.id, ...userWithoutPassword } as UserResponse,
      };
    } catch (error) {
      throw error;


    }
  }
  private generateVerificationToken(registerInput: RegisterInput): string {
    const payload = { registerInput };
    const secret = this.configService.get<string>('VERIFICATION_EMAIL_SECRET');
    return this.jwtService.sign(payload, { secret, expiresIn: '1h' });
  }

  private async hashPassword(password: string): Promise<string> {
    try {
      // Argon2 configuration for optimal security
      return await argon2.hash(password, {
        type: argon2.argon2id, // Use argon2id variant (recommended)
      });
    } catch (error) {
      throw new Error('Password hashing failed');
    }
  }

  private async verifyPassword(
    hashedPassword: string,
    plainPassword: string,
  ): Promise<boolean> {
    try {
      return await argon2.verify(hashedPassword, plainPassword);
    } catch (error) {
      throw new Error('Password verification failed');
    }
  }

  private generateAccessToken(user: User): string {
    const payload: TokenPayload = {
      userId: user.id, // Convert number to string
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      fullName: user.fullName,
      isEmailVerified: user.isEmailVerified,
      role: user.role,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,

    };
    let secret = this.configService.get<string>('ACCESS_TOKEN_SECRET');
    return this.jwtService.sign(payload, { secret, expiresIn: '24h' });
  }



}
