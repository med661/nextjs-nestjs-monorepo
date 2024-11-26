// async verifyEmail(token: string): Promise<string> {
//   try {
//     // Verify and decode the JWT token
//     const decoded = await this.jwtService.verify(token);
//     console.log(decoded)

//     if (!decoded || !decoded.registerInput) {
//       throw new Error('Invalid verification token');
//     }

//     const { registerInput } = decoded;

//     // Check if user already exists
//     const existingUser = await this.userRepository.findOne({
//       where: { email: registerInput.email },
//     });
//     console.log(existingUser)

//     if (existingUser) {
//       if (existingUser.isEmailVerified) {
//         throw new Error('Email already verified');
//       }
//       throw new Error('User already exists but not verified. Please request a new verification email.');
//     }

//     // Create and save new user with verified status
//     const hashedPassword = await this.hashPassword(registerInput.password);

//     const newUser = this.userRepository.create({
//       ...registerInput,
//       fullName: registerInput.firstName + " " + registerInput.lastName,
//       password: hashedPassword,
//       isEmailVerified: true,
//     });

//     await this.userRepository.save(newUser);

//     return 'Email verified and user registered successfully';

//   } catch (error) {
//     if (error.name === 'TokenExpiredError') {
//       throw new Error('Verification token has expired');
//     }
//     if (error.name === 'JsonWebTokenError') {
//       throw new Error('Invalid verification token');
//     }
//     throw new Error(error.message);
//   }
// }

