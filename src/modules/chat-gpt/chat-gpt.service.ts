import { Inject, Injectable } from '@nestjs/common';
import { ListEnginesResponse, ListModelsResponse, OpenAIApi } from 'openai';

@Injectable()
export class ChatGptService {
  constructor(@Inject('OpenAI') private readonly openai: OpenAIApi) {}

  private prompts = ['你好，你是谁?'];
  private answers = ['我是OpenAI创造的人工智能。今天我能为您做些什么?'];

  // 收集每次问答的数据
  async collectData(prompt: string, answer: string): Promise<void> {
    this.prompts.push(prompt);
    this.answers.push(answer);
  }

  // 列出所有模型
  async listModels(): Promise<ListModelsResponse> {
    const response = await this.openai.listModels();
    return response.data;
  }
  // 列出所有引擎
  async listEngines(): Promise<ListEnginesResponse> {
    const response = await this.openai.listEngines();
    return response.data;
  }

  async generateText(prompt: string): Promise<{ result: string }> {
    this.prompts.push(prompt);
    const response = await this.openai.createCompletion({
      model: 'gpt-3.5-turbo',
      prompt: this.generatePrompt(prompt),
      temperature: 0.5,
      max_tokens: 1024,
    });
    const answer = response.data.choices[0].text;
    this.answers.push(answer);
    return { result: answer };
  }

  // 根据输入生成prompt
  generatePrompt(input: string): string {
    // 当长度超过200时，删除最早的一条数据
    if (this.prompts.length > 200) {
      this.prompts.shift();
      this.answers.shift();
    }
    let result = this.answers.reduce((acc, cur, index) => {
      acc += `人类:${this.prompts[index]}\n\nAI:${cur}\n`;
      return acc;
    }, '以下是与人工智能助手的对话。这个助理乐于助人、有创意、聪明而且非常友好.\n');
    result += `\n人类:${input}\n\nAI:`;
    return result;
  }
}
