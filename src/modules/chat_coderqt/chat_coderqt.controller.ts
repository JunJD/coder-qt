import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { Public } from '../auth/decorators/public.decorator';
import { ChatCoderService } from './chat_coderqt.service';

@Controller('coderqt')
export class ChatCoderController {
  constructor(private readonly cChatCoderService: ChatCoderService) {}

  // 登录
  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('generateText')
  async generateText(@Body() body) {
    return await this.cChatCoderService.generateText(body.prompt);
  }
}
