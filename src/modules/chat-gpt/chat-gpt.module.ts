import { Module } from '@nestjs/common';
import { Configuration, OpenAIApi } from 'openai';
import { ChatGptController } from './chat-gpt.controller';
import { ChatGptService } from './chat-gpt.service';

// Use the OpenAI package in a NestJS module
@Module({
  providers: [
    {
      provide: 'OpenAI',
      useFactory: () => {
        const configuration = new Configuration({
          organization: 'org-P1fsjrdg75BwvJpkfMReoPW3',
          apiKey: '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',
        });
        return new OpenAIApi(configuration);
      },
    },
    ChatGptService,
  ],
  controllers: [ChatGptController],
})
export class ChatGptModule {}
