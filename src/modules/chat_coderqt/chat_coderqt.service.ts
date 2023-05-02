import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class ChatCoderService {
  constructor(private readonly httpService: HttpService) {}

  async generateText(prompt: string): Promise<{ result: any }> {
    console.log('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');
    const result = await firstValueFrom(
      this.httpService
        .post('v1/chat/completions', {
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: prompt }],
        })
        .pipe(
          catchError((error: AxiosError) => {
            throw error;
          }),
        ),
    );
    const data = result.data;
    const answer = data.choices[0].message.content;
    return { result: answer };
  }
}
