import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as os from 'os';
const interfaces = os.networkInterfaces();
const wifiInterface =
  interfaces['Wi-Fi'] || interfaces['wlan0'] || interfaces['WLAN'];
const wifiIp = wifiInterface?.find((iface) => iface.family === 'IPv4').address;
console.log(`WiFi IP: ${wifiIp}`);

async function bootstrap(wifiIp) {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('coder-qt API')
    .setDescription('The coder-qt API description')
    .setVersion('1.0')
    .addTag('users')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000, async () => {
    console.log(wifiIp ? `http://${wifiIp}:3000` : await app.getUrl());
  });
}
bootstrap(wifiIp);
