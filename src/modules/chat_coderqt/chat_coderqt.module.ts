import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ChatCoderController } from './chat_coderqt.controller';
import { ChatCoderService } from './chat_coderqt.service';

// Use the OpenAI package in a NestJS module
@Module({
  imports: [
    HttpModule.register({
      timeout: 100000,
      // maxRedirects: 5,
      baseURL: 'https://api.openai.com',
      headers: {
        accept: 'application/json, text/plain, */*',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
        'content-type': 'application/json;charset=UTF-8',
        Authorization:
          'Bearer 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',
      },
    }),
  ],
  providers: [ChatCoderService],
  controllers: [ChatCoderController],
})
export class ChatCoderModule {}
