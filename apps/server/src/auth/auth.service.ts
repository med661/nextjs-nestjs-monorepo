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
      await this.emailService.sendWelcomeEmail(registerInput.email, "hllo,", verificationEmailHtml(registerInput.email, token))
      return 'Verification email sent'
    } catch (error) {
      throw new Error(error.message)

    }


  }



  private generateToken(registerInput: RegisterInput): string {
    const payload = { registerInput };
    return this.jwtService.sign(payload, { expiresIn: '1h' });
  }


}
