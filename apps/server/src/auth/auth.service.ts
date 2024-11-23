import { Injectable } from '@nestjs/common';
import { RegisterInput } from './dto/auth.input';
import { EmailService } from 'src/services/email.service';
import { User } from 'src/entities/user.entity';
import { verificationEmailHtml } from 'src/services/templates/email.template'; // Import the email template
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';



@Injectable()
export class AuthService {
  constructor(
    private emailService: EmailService,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private jwtService: JwtService,

  ) { }
  async register(registerInput: RegisterInput): Promise<string> {
    try {

      let existUser = await this.userRepository.findOne({ where: { email: registerInput.email } })
      if (existUser) {
        throw new Error("User already exists"); // Throw an error instead of returning an object
      }
      let token = this.generateToken(registerInput);
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
      // Verify and decode the JWT token
      const decoded = await this.jwtService.verify(token);
      console.log(decoded)

      if (!decoded || !decoded.registerInput) {
        throw new Error('Invalid verification token');
      }

      const { registerInput } = decoded;

      // Check if user already exists
      const existingUser = await this.userRepository.findOne({
        where: { email: registerInput.email },
      });
      console.log(existingUser)

      if (existingUser) {
        if (existingUser.isEmailVerified) {
          return 'Email already verified';
        }
        throw new Error('User already exists but not verified. Please request a new verification email.');
      }

      // Create and save new user with verified status
      const newUser = this.userRepository.create({
        ...registerInput,
        fullName: registerInput.firstName + " " + registerInput.lastName,
        isEmailVerified: true,
      });

      await this.userRepository.save(newUser);

      return 'Email verified and user registered successfully';

    } catch (error) {
      if (error.name === 'TokenExpiredError') {
        throw new Error('Verification token has expired');
      }
      if (error.name === 'JsonWebTokenError') {
        throw new Error('Invalid verification token');
      }
      throw new Error(error.message);
    }
  }





  private generateToken(registerInput: RegisterInput): string {
    const payload = { registerInput };
    return this.jwtService.sign(payload, { expiresIn: '1h' });
  }


}
