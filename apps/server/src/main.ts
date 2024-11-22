import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log('Server is running');
  console.log('Port', process.env.PORT);
  console.log('DB_TYPE:', process.env.DB_TYPE); // Check if it's undefined
  console.log('DB_HOST:', process.env.DB_HOST);
  console.log('DB_PORT:', process.env.DB_PORT);

  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3000', // Allow requests from this origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed HTTP methods
    credentials: true, // Allow credentials (if needed)
  });
  await app.listen(process.env.PORT);
}
bootstrap();
