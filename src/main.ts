if (process.env.NODE_ENV !== 'production') {
  import('tsconfig-paths/register').catch((err) => {
    console.error('Error loading tsconfig-paths/register:', err);
  });
}

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';  // Ensure .js extension is included
import 'reflect-metadata';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();

