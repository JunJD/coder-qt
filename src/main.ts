import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
import * as compression from 'compression';
import * as rateLimit from 'express-rate-limit';
import * as bodyParser from 'body-parser';
import * as os from 'os';

const interfaces = os.networkInterfaces();
const wifiInterface =
  interfaces['Wi-Fi'] || interfaces['wlan0'] || interfaces['WLAN'];
const wifiIp = wifiInterface?.find((iface) => iface.family === 'IPv4').address;

async function bootstrap(wifiIp) {
  const app = await NestFactory.create(AppModule);
  // 安全
  app.use((helmet as any)());
  // 压缩响应
  app.use(compression());
  // 限制请求
  app.use(
    (rateLimit as any)({
      windowMs: 15 * 60 * 1000,
      max: 100,
      message: '请求太多,请15分钟后再试',
    }),
  );

  // 解析请求体（实际是为了解除nestjs对请求体大小的限制）
  app.use(bodyParser.json({ limit: '1mb' }));

  const options = new DocumentBuilder()
    .setTitle('coder-qt API')
    .setDescription('The coder-qt API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  document.components.securitySchemes = {
    api_key: {
      type: 'apiKey',
      name: 'Origin-Agent-Cluster',
      in: 'header',
    },
  };
  SwaggerModule.setup('api', app, document);
  let port = 3000;
  while (true) {
    try {
      await app.listen(port);
      console.log(wifiIp ? `http://${wifiIp}:${port}` : await app.getUrl());
      break;
    } catch (err) {
      port++;
    }
  }
}
bootstrap(wifiIp);
