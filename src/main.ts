import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './modules/app.module';
import { SwaggerConfig } from './swagger/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  SwaggerModule.setup('documentation', app, SwaggerConfig(app));
  
  app.enableCors();
  await app.listen(3232);
}
bootstrap();
