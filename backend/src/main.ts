import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ Enable CORS for frontend
  app.enableCors({
    origin: 'http://localhost:5173', // allow requests from frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  });

  // ✅ Enable global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,  // strips properties that do not have decorators
      transform: true,  // automatically transforms payloads to DTO instances
    }),
  );

  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  console.log(`🚀 Application is running on: http://localhost:${port}`);
}
bootstrap();