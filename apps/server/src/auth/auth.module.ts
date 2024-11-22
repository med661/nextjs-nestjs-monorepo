import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { EmailService } from 'src/services/email.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([User]),
  JwtModule.register({
    secret: 'topSecret51',
    signOptions: { expiresIn: '1d' },
  })

  ], // Register User entity
  providers: [AuthResolver, AuthService, EmailService],
})
export class AuthModule { }
