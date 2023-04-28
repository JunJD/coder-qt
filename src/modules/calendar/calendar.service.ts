import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EventType } from './../../entities/calendar/eventType.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CalendarService {
  constructor(
    @InjectRepository(EventType)
    private readonly eventTypeRepository: Repository<EventType>,
  ) {}

  // 查询所有事件类型
  async findTypeAll(): Promise<EventType[]> {
    return await this.eventTypeRepository.find();
  }
}
