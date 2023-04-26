import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { Public } from '../auth/decorators/public.decorator';
import { ChatGptService } from './chat-gpt.service';

@Controller('my')
export class ChatGptController {
  constructor(private readonly chatGptService: ChatGptService) {}

  // 登录
  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('generateText')
  async generateText(@Body() body) {
    return await this.chatGptService.generateText(body.prompt);
  }
}
