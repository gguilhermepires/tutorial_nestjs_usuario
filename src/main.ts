import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from "fs";
async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync('src/certs/privateKey.key'),
    cert: fs.readFileSync('src/certs/certificate.crt'),
  };

  const app = await NestFactory.create(AppModule, {
    httpsOptions,
  });
  
  await app.listen(3000);
}
bootstrap();
